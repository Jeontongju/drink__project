'use strict';
const mongoose = require('mongoose');
const resultSchema = new mongoose.Schema(
    {
        content : {
            type : String,
            unique : true,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Result', resultSchema);