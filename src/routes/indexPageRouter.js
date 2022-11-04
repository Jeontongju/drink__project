'use strict';
const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink.js'); //db에서 불러와주기!! 
const Question = require('../models/Question.js');

// isLogined라는 변수에 값을 넣어서 client로 전달하기!
// 로그인 유무를 파악하는 함수...!!
function isLogined(value){
    let logined = value === true ? value = "logout" : value = "login";
    return logined;
}
module.exports = () => {
    // 0 
    // 1. 메인페이지 GET /index
    router.get('/index', async(req,res) => {
        try{
            
            // req.user !=
            let key = await Drink.findOne().select('-_id -id -sweet -img -body -cool -meterial -company -flavour_type -sour');
            // console.log(key);
            let img = await Drink.find().where('img').limit(12);
            let drink = await Drink.find().limit(12);
            let keyArr = Object.keys(key.toJSON());
            console.log(drink);
            console.log(keyArr);
            let mainPage = await res.status(200)
            .render('index.ejs', {
                isLogined : isLogined(req.user),
                drink : drink,
                keyArr : keyArr,
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 회원가입 페이지 GET /new/index
    router.get('/new/index', async(req,res) => {
        try{
            let newPage = await res.status(200).render('register.ejs',
            {
                isLogined : isLogined(req.user),
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 3. 로그인 페이지 GET /local/index
    router.get('/local/index', async(req,res) => {
        try{
            console.log(`req.user >> ${req.user}`);
            console.log(`함수 >> ${isLogined(req.user)}`);
            console.log('로그인 페이지 호출!');
            const loginPage = await res.status(200).render('login.ejs', 
            {
                isLogined : isLogined(req.user),
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 4. 로그아웃 GET /logout
    router.get('/logout', async(req,res) => {
        console.log('로그아웃 호출!');
        req.session.destroy(() => {
            return res.redirect('/index');
        })
    })

    // 5. 술 취향 GET /drink-test/index
    router.get('/drink-test/index', async(req,res) => {
        
        try{
            
            let questions = await Question.find({});
            console.log('질문 >> ');
            console.log(questions);
            let testPage = await res.render('test.ejs', {
                contents : questions,
            })
            return testPage;
        }catch(err){
            return console.log(err);
        }
    })


    // 7. 전통주 홍보 GET /drink-ex/index
    router.get('/drink-ex/index', async(req,res) => {
        try{
            let explain = await res.status(200).render('advantage.ejs',
            {
                isLogined : isLogined(req.user),
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 8. 마이페이지 GET /my-pages/index
    router.get('/my-pages/index', async(req,res) => {
        try{
            let myPage = await res.status(200).render('mypage.ejs',
            {
                isLogined : isLogined(req.user),
            });
        }catch(err){
            return console.log(err);
        }
    })

    // test값 넘기기
    router.get('/result', async(req,res) => {
        try{
            console.log('api 호출!!');
            const { question } = req.query;
            
            let result = question.map((value) => +value);
            console.log(result);
            let questions = await Question.find({});
            let findDrink = await Drink.find({
                $and : [
                    {sweet : result[0]},
                    {sour : result[1]},
                    {body : result[2]},
                    {cool : result[3]},
                ]
            })
            console.log(findDrink[0])
            // 일단 flavor type을 띄우기!! => ajax로
            let flavour = findDrink[0].flavour_type;
            const list = await Drink.find({ flavour_type: { $regex: flavour } });
            // return res.json(flavour);
            console.log(flavour);
            console.log(list);
            return res.render('test.ejs', {
                contents : questions,
                type : flavour,
            })
        }catch(err){
            return console.log(err);
        }
        
    })

    router.get('/type/:type', async(req,res) => {
        try {
            const {type} = req.params;
            let findAll = await Drink.find(); // 전체 다 출력!
            // console.log(findAll); // [{}, {}, {}, {}]
            let resultArr = findAll.filter((ele) => {
              return ele.flavour_type.includes(type) === true;
              // 전체 문자중에 filter로 값 거르기!!!!! ===> javascript의 중요성
              // 값을 서버에서 전부 다 함수를 사용해서 조립해주는.. 역할
            });
            let property = await Drink.findOne().select(
              "title type flavour_type food"
            );
            let pro = Object.keys(property.toJSON());
            // console.log(resultArr);
            // 이제 찾아줬으면 page!
            let resultRender = await res.status(200).render("drinkResult.ejs", {
              isLogined: isLogined(req.user),
              property: pro,
              drink: resultArr,
            });
        } catch (err) {
            return console.log(err);
        }
    })
    return router;
}