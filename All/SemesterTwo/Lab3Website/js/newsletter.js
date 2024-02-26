"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 1.0.0
*Date Last Modified:2/11/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - Added JavaScript to validate form, alert user of errors, reset, and submit form
***
******************************************************************** */
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#submit_form").addEventListener("click", () => {
        const email1 = $("#email_1");//Gets entry data
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        const lastName = $("#last_name");
        const email1Span = $("#email_1_span");//Gets span tags
        const email2Span = $("#email_2_span");
        const firstNameSpan = $("#first_name_span");
        const lastNameSpan = $("#last_name_span");

        let validForm = true;//stores value of if form is valid

        if(email1.value == ""){
            email1Span.textContent = "First Email Required";
            validForm = false;
        }else{
            email1Span.textContent = "";
        }

        if(email2.value != email1.value || email2.value == ""){
            email2Span.textContent = "You Must Reconfirm Your Email";
            validForm = false;
        }else{
            email2Span.textContent = "";
        }

        if(firstName.value == ""){
            firstNameSpan.textContent = "First Name Required";
            validForm = false;
        }else{
            firstNameSpan.textContent = "";
        }

        if(lastName.value == ""){
            lastNameSpan.textContent = "Last Name Required";
            validForm = false;
        }else{
            lastNameSpan.textContent = "";
        }

        if (validForm) {
            $("#contact_form").submit();
        }

    });

    $("#reset_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
        $("#last_name").value = "";
        
        $("#email_1").focus();
    });

    $("#email_1").focus();
});