// modal

let modal = document.getElementsByClassName("myModal");
let buttons = document.getElementsByClassName("openModal");
let closePrice = document.getElementsByClassName("close")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        buttons[i].nextElementSibling.style.display = "block";
    }
}

for (let i = 0; i < closePrice.length; i++) {
    closePrice[i].onclick = function () {
        modal[i].style.display = "none";
    }
    modal[i].onclick = function() {
        modal[i].style.display = "none";
    }
}

// scroll nav

let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-scroll")).scrollIntoView({behavior: "smooth"});
    }
}

let burgerPrice = document.getElementsByClassName("burgerPrice");
let menu = document.getElementsByClassName("menu");
let closeMenu = document.getElementsByClassName("menu-close");
for (let i = 0; i < burgerPrice.length; i++) {
    burgerPrice[i].onclick = function () {
        burgerPrice[i].style.display = 'none';
        closeMenu[i].classList.toggle('open');
        // burger[i].classList.toggle('active');
        menu[i].classList.toggle('open');
    }
    closeMenu[i].onclick = function () {
        burgerPrice[i].style.position = 'fixed';
        closeMenu[i].classList.remove('open');
        menu[i].classList.remove('open');
    }
}