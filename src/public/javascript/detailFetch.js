'use strict';
// detail로 가는 fetch함수 구현완료! 

const idArr = [];
const drinkBox = document.querySelectorAll('.drink__result__box');


drinkBox.forEach((value, index) => {
    idArr.push(value.getAttribute('data-id'));
    value.addEventListener('click', () => {
        // alert(idArr[index]);
        detailFetch(idArr[index]);
    })
})

async function detailFetch(id){
    try{
        let idData = await fetch(`/drink/${id}`);
        console.log(`id >> ${idData}`);
        let redirect = window.location.href = `/drink/${id}`;
        return redirect;
    }catch(err){
        return console.log(err);
    }
}

// item
let itemArr = [];
const item = document.querySelectorAll('.item');

item.forEach((value, index) => {
    itemArr.push(value.getAttribute('data-id'));

    value.addEventListener('click', () => {
        itemFetch(itemArr[index]);
    })
})

async function itemFetch(id){
    try{
        let itemID = await fetch(`/drink/${id}`);
        console.log(itemID);
        let redirect = window.location.href = `/drink/${id}`;
        return redirect;
    }catch(err){
        return console.log(err);
    }
}