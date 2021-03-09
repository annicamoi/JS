let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");
let mobileButton = document.getElementById ("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");


window.onscroll = function () {
scrollFunction();
} ;

const scrollFunction = () => {
    if (
        document.body.scrollTop > 100 || 
        document.documentElement.scrollTop > 100
     ) {
        header.classList.add("bg");
    } else {
        header.classList.remove("bg");
        buttonBackToTop.style.display = "none";
    }
};

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
};

const mobMenu = ()=> {
for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
}
if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow ="";
} else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
}
};

buttonBackToTop.addEventListener("click", getToTop); 
mobileButton.addEventListener("click", mobMenu);