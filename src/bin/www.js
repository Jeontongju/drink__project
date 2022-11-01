'use strict';
const app = require('../../app.js');
require('dotenv').config({ path : './src/env/variables.env' });
const { PORT } = process.env;

async function start(portNumber){
    try{
        let server = await app.listen(portNumber);
        return console.log(`${portNumber}port open!`);
    }catch(err){
        return console.log(err);
    }
}

start(PORT);