"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 2.0.0
*Date Last Modified:3/3/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/24/2024 - Added a carousel to let users cycle through images
v 2.0.0 - 3/3/2024 - Added an option to drag the image box around
***
******************************************************************** */
$(document).ready( () => {
    const slider = $("#image_list");
    $("#drag").draggable();
    
    $("#left_button").click( () => {
        const leftProperty = parseInt(slider.css("left"));

        let newLeftProperty = 0;

        if(leftProperty < 0){
            newLeftProperty = leftProperty + 300;
        }
        else{
            newLeftProperty = -1200;
        }
        slider.animate({left: newLeftProperty}, 1000);
    });

    $("#right_button").click( () => {
        const leftProperty = parseInt(slider.css("left"));

        let newLeftProperty = 0;

        if(leftProperty - 300 > -1500){
            newLeftProperty = leftProperty - 300;
        }
        slider.animate({left: newLeftProperty}, 1000); 
    });
});