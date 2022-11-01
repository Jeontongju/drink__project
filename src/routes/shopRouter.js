'use strict';
const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop.js');
module.exports = () => {

    // 6. 전통주점 GET /drink-shop/index
    router.get('/index', async(req,res) => {
        try{
            let shop = await res.status(200).render('drinkShop.ejs');

        }catch(err){
            return console.log(err);
        }
    })
    // /drink-shop/:area
    router.get('/area/:area', async(req,res) => {
        try{
            console.log('api호출!') ;
            const { area } = req.params;
            console.log(area);
            const shop = await Shop.find({address : { $regex : area }});
            console.log(shop);
            res.render('drinkArea.ejs', {
                area1 : area,
                area : shop,
            });
        }catch(err){
            return console.log(err);
        }
    })
    return router;
}