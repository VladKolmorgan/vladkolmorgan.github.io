"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 1.0.0
*Date Last Modified:2/11/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - JavaScript made to take you to the homepage after 10 seconds, or on skip click
***
******************************************************************** */
const $ = selector => document.querySelector(selector); 

let timer = null;
let counter = 10;
$("#seconds").textContent = counter;//gets and sets timer to counter max

const goToConfirm = () => {//once counter hits 0 sends to home page
    counter--;
    if (counter == 0) {
        window.location.href = "index.html";
    } else {
        $("#seconds").textContent = counter;//writes seconds on page
    }
};

const skippedTimer = () => {
    clearInterval( timer );
};

const btn = document.querySelector("#skip_timer");
btn.addEventListener("click", () => window.location.href = "index.html?accepted=true");//sends home if skip is clicked

document.addEventListener("DOMContentLoaded", () => {//runs the timer
    const i = window.location.href.indexOf("accepted");
    if (i == -1) {
        timer  = setInterval( goToConfirm, 1000 );
        $("#skip_timer").addEventListener("click", skippedTimer);
    }
});