'use strict';
// alert('hello');
const area = document.querySelectorAll('.area__box');
const areaArr = [];

area.forEach((value, index) => {
    areaArr.push(value.getAttribute('data-id'));
    value.addEventListener('click', () => {
        // alert(areaArr[index])
        areaFetch(areaArr[index]);
    })
})

async function areaFetch(area){
    try{
        let go = await fetch(`/drink-shop/area/${area}`)
        .then(() => {
            return window.location.href = `/drink-shop/area/${area}`;
        })
        // console.log(go);
    }catch(err){
        return console.log(err);
    }
}