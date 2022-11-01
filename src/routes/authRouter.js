'use strict';
// 리펙토링
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
// /api/auth
module.exports = (passport) => {
    // 1. 회원가입 : POST /api/auth/new
    router.post('/new', async(req,res) => {
        try{
            const { email, password, userName, nickName } = req.body;
            let user = new User({ // mongoose가 javascript객체로 document를 접근할 수 있게 해줌.
                email : email,
                password : password,
                userName : userName,
                nickName : nickName,
            })
            let saveUser = await user.save(); //db에 저장! ==> 저장하기전에.. bcrypt사용해야해!
            console.log(saveUser);
            return res.redirect('/index');
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 로그인 : POST /api/auth/local-process
    router.post('/local-process', passport.authenticate('local', {
    successRedirect : '/index', 
    failureRedirect : '/local/index',
    // 성공하면 메인 페이지로.. 실패하면 다시 로그인 페이지로.. 
    // failureFlash : true 
}))
    return router;
}

