const yourname = document.querySelector(".yourName");
const nickname = document.querySelector(".nickName");
const giveyourself = document.querySelector(".giveyourself");
let btn = document.querySelector(".submitBtn");
let message = document.querySelector(".message");

// 想用網址帶參數 目前失敗 取不到value 不知道為甚麼
function changePage() {
    console.log(nickname);
    yournamev = yourname.value;
    nicknamev = nickname.value;
    nicknamev = giveyourself.value
    window.location.href = `QA_.html?${ document.querySelector(".yourName").value}&${document.querySelector(".nickName").value}&${document.querySelector(".giveyourself").value}`;
}