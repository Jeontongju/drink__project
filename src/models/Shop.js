'use strict';
const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        address : {
            type : String,
            unique : true,
            required : true,
        },
        phone : {
            type : String,
            unique : true,
            required : true,
        },
        menu : {
            type : String,
            required : true,
            unique : true,
        },
        link : {
            type : String,
            required : true,
            unique : true,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Shop', shopSchema);