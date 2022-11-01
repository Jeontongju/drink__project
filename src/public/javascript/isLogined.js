'use strict';
const loginMenu = document.querySelector('.login');
// alert(loginMenu.innerHTML.trim());
loginMenu.innerHTML.trim() === "login" ? loginMenu.setAttribute("href", "/local/index") : loginMenu.setAttribute("href", "/logout");