const headerLightMode = document.querySelector(".header");
const btnLightMode = document.querySelector(".icone");
const textoLogo = document.querySelectorAll("a");

const sol = document.querySelector(".sol");
const lua = document.querySelector(".lua");

const contentLightMode = document.querySelector(".content");
const body = document.querySelector("body");

const texto = document.querySelector(".title");
const paragrafo = document.querySelectorAll("p")
const feedback = document.querySelector(".review .information h3");
const textoSlider = document.querySelectorAll(".review .review-slider .slide p");
const tarefas = document.querySelector("#to-do-list")
const information_H3 = document.querySelector(".information h3")


btnLightMode.addEventListener('click', function () {
    body.classList.toggle("light-mode");
    contentLightMode.classList.toggle("light-mode")
    headerLightMode.classList.toggle("light-mode");
    texto.classList.toggle("light-mode")
    feedback.classList.toggle("light-mode");
    tarefas.classList.toggle("light-mode")
    information_H3.classList.toggle("light-mode")

    sol.classList.toggle("hidden");

    paragrafo.forEach((p) => {
        p.classList.toggle("light-mode")
        p.classList.toggle("backgroundParagrafo")
    })
    textoSlider.forEach((p) => {
        p.classList.toggle("textoBranco")
    })
    
    textoLogo.forEach((p) => {
        p.classList.toggle("logoPreta")
    })
})