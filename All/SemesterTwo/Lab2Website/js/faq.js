"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 1.0.0
*Date Last Modified:2/11/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - Added JavaScript to hide or show information on the FAQ page
***
******************************************************************** */
const toggle = evt => {//gets page info
    const aElement = evt.currentTarget;
    const h3Element = aElement.parentNode;
    const divElement = h3Element.nextElementSibling;

    if(divElement.hasAttribute("class")){//switches class to be seen or not seen
        divElement.removeAttribute("class");
    }
    else{
        divElement.className = "open";
    }

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    const aElements = faqs.querySelectorAll("#faqs a");//gets tags in main
        
    for (let aElement of aElements) {//attaches an event handler for every a element
        aElement.addEventListener("click", toggle);
    }
});