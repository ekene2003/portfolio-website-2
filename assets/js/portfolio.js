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
let aboutSection = singleelem(".about-section");
let skillSection = singleelem(".skill-section");
let projectSection = singleelem(".project-section");
let footer = singleelem(".footer");
let aboutHead = singleelem(".about-head");
let projectHead = singleelem(".project-head");
let projectBtn = multielem(".project-btn");
let footerLinks = multielem(".footer-links");
let socials = singleelem(".socials");
let footerHead = singleelem(".get-in-touch");
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
     `;
     darkBg.style.transition = "all 2s ease-in-out 5ms";
     aboutSection.style.background = "#121212";
     projectSection.style.background = "#121212";
     footer.style.background = "#121212";
     skillSection.style.background = "lightgrey";
     socials.style.boxShadow = "none"; 
     socials.style.background = "black"; 
     projectBtn.forEach(btn => {
     btn.style.color = "white"; 
     });
     aboutHead.style.color = "white";
     projectHead.style.color = "white";
     footerHead.style.color = "white";
     footerLinks.forEach(link => {
     link.style.color = "white";
     });

}
lightModeBtn.onclick = () => {
     toogleBtn.style.left = "0%";
     toogleBtn.style.right = "";
     darkBg.innerHTML = `
               <img src="./assets/images/pexels-pixabay-514575.jpg" alt="" class="bg">
     `;
     darkBg.style.transition = "all 2s ease-in-out 5ms";
     aboutSection.style.background = "#fbf8f5";
     projectSection.style.background = "#fbf8f5";
     footer.style.background = "#fbf8f5";
     skillSection.style.background = "#eeeeeb";
     socials.style.boxShadow = "2px 2px 6px 3px gray"; 
     socials.style.background = "black"; 
     projectBtn.forEach(btn => {
     btn.style.color = "black"; 
     });
     aboutHead.style.color = "black";
     projectHead.style.color = "black";
     footerHead.style.color = "black";
     footerLinks.forEach(link => {
     link.style.color = "black";
     });

}