'use strict';
const food = document.querySelectorAll('.food > span');
const foodName = ['생선', '고기', '전골', '치즈', '샐러드'];
food.forEach((value, index) => {
    value.addEventListener('click', () => {
        foodFetch(foodName[index]); // 각 음식 이름을 전달해줌..!
    })
})
// result 라우터에 데이터를 fish를 주면 돼!!!! => 그리고 req.query받아주면 돼!!!
async function foodFetch(foodName){
    try{
        let data = await fetch(`/drink?food=${foodName}`);
        // 넘겨줬는데....?
        // 받은 값을 어떻게 처리해야할지 모르겠네....
        return window.location.href = `/drink?food=${foodName}`;
    }catch(err){
        return console.log(err);
    }
}