'use strict';

const mongoose = require('mongoose');
require('dotenv').config({ path : './src/env/variables.env' });
const { DB_URL } = process.env;

async function dbConnect(){
    try{
        let db = await mongoose.connect(DB_URL,{
            useNewUrlParser : true,
        })
        return console.log(`db connected successfully!`);
    }catch(err){
        return console.log(err);
    }
}

module.exports = dbConnect;