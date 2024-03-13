"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 3.0.0
*Date Last Modified:3/7/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - Added JavaScript to hide or show information on the FAQ page
v 2.0.0 - 2/25/2024 - Converted to jQuery, added animation to opening and closing tabs
v 3.0.0 - 3/7/2024 - Modified animation to be more complex
***
******************************************************************** */
$(document).ready( () => {
    $("#faqs h3").click( evt => {
        const h3 = evt.currentTarget;

        $(h3).toggleClass("minus");
        if($(h3).attr("class") != "minus"){
            $(h3).next().slideUp("easing", "swing", 1500);
        }
        else{
            $(h3).next().slideDown("easing", "swing", 1500);
        }
        evt.preventDefault();
    });
});