'use strict';
const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema(
    {
        questionType : { // 질문타입(1 - 4까지)
            type : Number,
            required : true,
            min : 1,
            max : 4,
        },
        contents : { // 질문내용
            type : String,
            required : true,
        }
        // 대답은 userDB에 answer객체로....담아주자! 
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Question', questionSchema);