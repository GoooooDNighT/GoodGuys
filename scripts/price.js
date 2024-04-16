// modal

let modal = document.getElementsByClassName("myModal");
let buttons = document.getElementsByClassName("openModal");
let close = document.getElementsByClassName("close");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        buttons[i].nextElementSibling.style.display = "block";
    }
}

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        modal[i].style.display = "none";
    }
}

// // Когда пользователь кликает вне окна, это тоже его закрывает
for (let i = 0; i < close.length; i++) {
    window.onclick = function() {
        modal.style.display = "none";
    }
}
