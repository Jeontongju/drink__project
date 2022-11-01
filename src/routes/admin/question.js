'use strict';
const express = require('express');
const router = express.Router();
// const Drink = require('../models/Drink.js'); //db에서 불러와주기!! 
const Question = require('../../models/Question.js');

module.exports = () => {
    // 1. /admin/question
    router.get('/question', async(req,res) => {
        try{
            let questionPage = await res.status(200).render('./admin/question.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 2. POST : /admin/question
    router.post('/question', async(req,res) => {
        try{
            // question DB에 저장한다. 
            const { contents, questionType } = req.body;
            console.log(contents, questionType);
            const question = new Question(
                {
                    questionType : questionType,
                    contents : contents,
                }
            )
            const saveQ = await question.save();
            console.log(saveQ);

            return res.redirect('/admin/question');
        }catch(err){
            return console.log(err);
        }
    })
    return router;
}