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
darkModeBtn.onclick = () => {
     toogleBtn.style.right = "0%";
     toogleBtn.style.left = "";
     

}

lightModeBtn.onclick = () => {
     toogleBtn.style.left = "0%";
     toogleBtn.style.right = "";
      
}