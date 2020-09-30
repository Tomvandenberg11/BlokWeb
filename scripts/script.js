// JavaScript Document
var klapToggle = document.querySelector("#hamburgernav");
var body = document.querySelector("body");

var menu = document.querySelector(".menu");

klapToggle.addEventListener("click", klappen);

function klappen() {
    menu.classList.toggle("toonMenu");
    klapToggle.classList.toggle("open");
    body.classList.toggle("absolute");
}
