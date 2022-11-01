'use strict';
const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink.js');

module.exports = () => {
    // 1. /test/result

    router.get('/result', async(req,res) => {
        try{
            const { question } = req.query;
            console.log(question);
            // console.log(req.query);
            let values = question.map((value) => +value);
            // console.log(values[0]);
            let drink = await Drink.find({ 
                $and : [
                    {sweet : values[0]},
                    {sour : values[1]},
                    {body : values[2]},
                    {cool : values[3]},
                ]
            })
            console.log(drink[0].flavour_type);
            return res.status(200).json(drink[0].flavour_type);
        }catch(err){
            return console.log(err);
        }
    })

    return router;
}