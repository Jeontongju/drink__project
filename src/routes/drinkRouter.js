'use strict';
// /drink 관련 라우터
const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink.js');
// 술 검색 
// 1. query문 ? /drink ? title = ""
// 2. params /drink/:id

function isLogined(value){
    let logined = value === true ? value = "logout" : value = "login";
    return logined;
}

function valuePush(...value){ //forEach문을 배열로 받아!!
    
}
module.exports = () => {
    // 1. query검색
    router.get('/', async(req,res) => {
        // console.log(`api호출!!!`);
        try{
            let { title } = req.query;
            if(title !== undefined){
                console.log(`이거 출력! >> ${title}`);
                // query문은 그냥 /drink에 ?로 따라오는거라 ?부분은 req.query에 담아주면돼!
                // 실제 값 
                let findAll = await Drink.find(); // 전체 다 출력!
                // console.log(findAll); // [{}, {}, {}, {}]
                let resultArr = findAll.filter((ele) => {
                    return ele.title.includes(title) === true;
                    // 전체 문자중에 filter로 값 거르기!!!!! ===> javascript의 중요성
                    // 값을 서버에서 전부 다 함수를 사용해서 조립해주는.. 역할
                })
                // 속성값만 찾아오기...!!
                let property = await Drink.findOne().select('title type flavour_type food -_id');
                let pro = Object.keys(property.toJSON());
                // console.log(resultArr);
                // 이제 찾아줬으면 page! 
                let resultRender = await res.status(200).render('drinkResult.ejs',{
                    isLogined : isLogined(req.user),
                    property : pro,
                    drink : resultArr,
                });
            }else{
                const food = new RegExp(req.query.food);
                console.log(`fetch전달 값 >> ${food}`);
                let findByFood = await Drink.find({food : food}).select().lean();
                console.log(findByFood);
                // let foodArr = [];
                // for(let key in findByFood){
                //     foodArr.push(findByFood[key].food);
                // }
                // console.log(foodArr);


                // console.log(newFood);
                // console.log(filter);
                // let findDrinkByFood = await Drink.find().select('food -_id').limit(3);
                // let filterFood = [...findDrinkByFood];
                // console.log(filterFood);
                // let valueArr = [];
                // filterFood.forEach((value) => {
                //     if(value.food.includes(food)){
                //         valueArr.push(value.food);
                //     }else{
                //         return;
                //     }
                // })
                // console.log(valueArr);
                // 즉 food에 이 값이 들어가있는 걸 출력해주면 돼!! 

                let property = await Drink.findOne().select(
                  "title type flavour_type food -_id"
                );
                let pro = Object.keys(property.toJSON());
                // console.log(resultArr);
                // 이제 찾아줬으면 page! 
                let resultRender = await res.status(200).render('drinkResult.ejs',{
                    isLogined : isLogined(req.user),
                    property : pro, // 속성 넘겨준거...!! 
                    drink : findByFood, // 값은 다른거!!
                });
            }
        }catch(err){
            return console.log(err);
        }
    })

    

    // 2. detail Page GET /drink/:id
    router.get('/:id', async(req,res) => {
        try{
            let { id } = req.params;
            console.log(id);
            let findDrink = await Drink.findOne({_id : id});
            console.log(findDrink);
            let detailPage = await res.status(200).render('drinkDetail.ejs',{
                drink : findDrink,
            });
        }catch(err){
            return console.log(err);
        }
    })
    return router; 
}