// JavaScript Document
var klapUit = document.querySelector("header img:first-of-type");
var klapIn = document.querySelector(".menu img");
var body = document.querySelector("body");

var menu = document.querySelector(".menu");

klapUit.addEventListener("click", uitklappen);
klapIn.addEventListener("click", inklappen);

function uitklappen() {
    menu.classList.add("toonMenu");
    body.classList.add("absolute");
}

function inklappen() {
    menu.classList.remove("toonMenu");
    body.classList.remove("absolute");
}