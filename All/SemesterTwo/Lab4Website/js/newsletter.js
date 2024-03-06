"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 3.0.0
*Date Last Modified:3/3/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - Added JavaScript to validate form, alert user of errors, reset, and submit form
v 2.0.0 - 3/2/2024 - Converted to jQuery, updated validation to current standards
v 3.0.0 - 3/3/2024 - Added a progress bar for validation progress
***
******************************************************************** */
$(document).ready( () => {
    //clears previous data
    $("span").text("");
    //submit validation
    $("#submit_form").click(() => {
        //clears previous data
        $("span").text("");
        //progress bar progression
        let progressAmount = 0;//total progress
        let emailOneProgress = 25;//% based value of each question
        let emailTwoProgress = 25;
        let firstNameProgress = 25;
        let lastNameProgress = 25;
        $("#progress_bar").progressbar({min: 0}, {max:100} ,{value:progressAmount});
        //gets input data
        const emailOne = $("#email_1").val();
        const emailTwo = $("#email_2").val();
        const firstName = $("#first_name").val();
        const lastName = $("#last_name").val();
        //creates validation
        const emailValidate = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;//an email
        const nameValidate = /^[a-zA-Z]+$/;//any alphabet text
        //validates input data
        let isValid = true;
        if (emailOne === "" || !emailValidate.test(emailOne)) {
            isValid = false;
            $("#email_1").next().text("Please enter a valid email.");
            emailOneProgress = 0;
        }
        if (emailTwo === "" || !emailValidate.test(emailTwo) || emailOne != emailTwo) {
            isValid = false;
            $("#email_2").next().text("Please enter a valid email.");
            if(emailOne != emailTwo){
                $("#email_2").next().text("Emails do not match.");
            }
            emailTwoProgress = 0;
        }
        if (firstName === "" || !nameValidate.test(firstName)) {
            isValid = false;
            $("#first_name").next().text("Please enter your first name.");
            firstNameProgress = 0;
        }
        if (lastName === "" || !nameValidate.test(lastName)) {
            isValid = false;
            $("#last_name").next().text("Please enter your last name.");
            lastNameProgress = 0;
        }
        //shows validation progress
        progressAmount = emailOneProgress + emailTwoProgress + firstNameProgress + lastNameProgress;
        $("#progress_bar").progressbar({value:progressAmount});
        //submits form and takes you to confirm page
        if (isValid) { 
            $("#contact_form").submit();
        }
    });
    //reset form
    $("#reset_form").click( () => {
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        $("#last_name").val("");
        $("#progress_bar").progressbar({value:0});
        
        $("span").text("*");
        $("#email_1").focus();
    })

    $("#email_1").focus(); 
});