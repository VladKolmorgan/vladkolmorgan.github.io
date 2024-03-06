"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 2.0.0
*Date Last Modified:2/25/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - Added JavaScript to hide or show information on the FAQ page
v 2.0.0 - 2/25/2024 - Converted to jQuery, added animation to opening and closing tabs
***
******************************************************************** */

$(document).ready( () => {
    $("#faqs h3").click( evt => {
        const h3 = evt.currentTarget;

        $(h3).toggleClass("minus");
        if($(h3).attr("class") != "minus"){
            $(h3).next().slideUp(1000);
        }
        else{
            $(h3).next().slideDown(1000);
        }
        evt.preventDefault();
    });
});