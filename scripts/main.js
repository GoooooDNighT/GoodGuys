const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})

// scroll

// const anchors = document.getElementsByClassName("scr");
//
// for (let anchor of anchors) {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelectorAll('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         })
//     })
// }

// modal

let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
// let modal = document.querySelectorAll(".myModal");
// let btn = document.querySelectorAll(".openModal");
let span = document.getElementsByClassName("close")[0];

// Когда пользователь кликает на кнопку, открывается окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь кликает на (x), закрываем окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает вне окна, это тоже его закрывает
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}