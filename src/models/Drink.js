'use strict';
const mongoose = require('mongoose');
const drinkSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
        },
        title : {
            type : String,
            unique : true,
            required : true,
        },
        price : {
            type : Number,
            required : true,
            min : 1000,
            max : 1000000,
        },
        img : {
            type : String,
        },
        type : {
            // 이걸로 정렬기능 넣을거니까 중요합니다..!
            type : String,
            required : true,
        },
        alcohol : { // 도수
            type : Number,
            required : true,
        },
        volume : {
            type : Number,
            required : true,
        },
        sweet : {
            type : Number,
            required : true,
            min : 1,
        },
        sour : {
            type : Number,
            required : true,
            min : 1,
        },
        body : {
            type : Number,
            required : true,
            min : 1,
        },
        cool : {
            type : Number,
            required : true,
            min : 1,
        },
        food : {
            type : String,
            // required : false로 해줌. => 입력받을 때 받는게 아니라 food에서 가져오는거라서!
            required : false,
        },
        meterial : String,
        company : String,
        flavour_type : {
            type : String,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Drink', drinkSchema);
// 대문자 풀고 s붙여서 collection만듦.