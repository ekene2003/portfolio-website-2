function singleelem(elem) {
     return document.querySelector(elem);
}
function multielem(elem) {
     return document.querySelectorAll(elem);
}
let toogleArea = singleelem(".toogle");
let lightModeBtn = singleelem(".light");
let darkModeBtn = singleelem(".dark");
let toogleBtn = singleelem(".circle");
let openBtn =  singleelem(".nav-icon");
let closeBtn = singleelem(".nav-icon2");
let nav = singleelem(".nav-wrap");
let darkBg = singleelem(".bg-section");
openBtn.onclick = () => {
     openBtn.style.display = "none";
     nav.style.left = "0";
     closeBtn.style.display = "block";
}
closeBtn.onclick = () => {
     closeBtn.style.display = "none";
     openBtn.style.display = "block";
     nav.style.left = "-100%";
}
darkModeBtn.onclick = () => {
     toogleBtn.style.right = "0%";
     toogleBtn.style.left = "";
     darkBg.innerHTML = `
     <img src="./assets/images/night2.jpg" alt="" class="bg">
     `
     darkBg.style.transition = "all 1s ease-in-out";
}
lightModeBtn.onclick = () => {
     toogleBtn.style.left = "0%";
     toogleBtn.style.right = "";
     darkBg.innerHTML = `
               <img src="./assets/images/pexels-pixabay-514575.jpg" alt="" class="bg">
     `;
     darkBg.style.transition = "all 1s ease-in-out";

}