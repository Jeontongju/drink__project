'use strict';
// 배열 내부 객체 keys values가져오기!! 
let user = [
    {id : 1, age : 20},
    {id : 2, age : 21},
    {id : 3, age : 22},
    {id : 4, age : 23},
    {id : 5, age : 24},
]

let b = [];
for(let key in user){
    b.push(user[key].age);
}
console.log(b);