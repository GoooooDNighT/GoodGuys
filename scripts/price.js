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
