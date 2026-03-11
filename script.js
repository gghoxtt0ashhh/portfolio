/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");
menuToggle.classList.toggle("open");

});


/* LANGUAGE SWITCH */

let english = true;

document.getElementById("langToggle").onclick = () => {

english = !english;

if(!english){

document.getElementById("heroText").innerText =
"Sou estudante de Análise e Desenvolvimento de Sistemas focada em criar experiências web interativas e visualmente envolventes. Gosto de explorar novas tecnologias e transformar ideias em interfaces limpas e funcionais.";

document.getElementById("aboutText").innerText =
"Gosto de criar sistemas visuais interativos e interessantes. Ultimamente estou estudando novas linguagens de programação e pretendo crescer na carreira não somente como desenvolvedor full stack, mas também aprender a usar e criar inteligência artificial e machine learning.";

document.getElementById("liquidificadorText").innerText =
"Um site criado para um trabalho do ensino médio sobre combinações matemáticas. O objetivo era criar um jogo interativo que mostrasse as diversas combinações possíveis.";

document.getElementById("langToggle").innerText = "EN";

}else{

location.reload();

}

};
