const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})

// scroll nav

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("questionnaire").scrollIntoView({behavior: "smooth"})
} //плавный скролл

let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

// burger

let burger = document.getElementsByClassName("burger");
let menu = document.getElementsByClassName("menu");
let closeMenu = document.getElementsByClassName("menu-close");
for (let i = 0; i < burger.length; i++) {
    burger[i].onclick = function () {
        burger[i].style.display = 'none';
        closeMenu[i].classList.toggle('open');
        // burger[i].classList.toggle('active');
        menu[i].classList.toggle('open');
    }
    closeMenu[i].onclick = function () {
        burger[i].style.position = 'fixed';
        closeMenu[i].classList.remove('open');
        menu[i].classList.remove('open');
    }
}

// validate

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        function formValidate(form) {
            let error = 0;
            let formReq= document.querySelectorAll('.req')

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);

                if (input.classList.contains('email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }

        }

        function formAddError(input) {
            input.parentElement.classList.add('error');
            input.classList.add('error');
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('error');
            input.classList.remove('error');
        }

        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    }
});

// let email = document.getElementById("email");
// let name = document.getElementById("name");
// let question = document.getElementById("question");
//
// document.getElementById("order-action").onclick = function () {
//     let hasError = false;
//
//     [email, name, question].forEach(item => {
//         if (!item.value) {
//             item.parentElement.style.borderBottom = "red";
//             hasError = true;
//         } else {
//             item.parentElement.style.background = "";
//         }
//     });
//
//     if (!hasError) {
//         [email, name,question].forEach(item =>{
//             item.value = "";
//         });
//         alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
//     }
// }