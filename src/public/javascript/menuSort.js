"use strict";
const menu = document.querySelectorAll(".menu > span");
const menuName = ["찌개", "전", "제철", "무침"];
food.forEach((value, index) => {
  value.addEventListener("click", () => {
    menuFetch(menuName[index]); // 각 음식 이름을 전달해줌..!
  });
});
// result 라우터에 데이터를 fish를 주면 돼!!!! => 그리고 req.query받아주면 돼!!!
async function menuFetch(menuName) {
  try {
    let data = await fetch(`/shop?menu=${menuName}`);
    // 넘겨줬는데....?
    // 받은 값을 어떻게 처리해야할지 모르겠네....
    return (window.location.href = `/shop?menu=${menuName}`);
  } catch (err) {
    return console.log(err);
  }
}
