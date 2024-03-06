"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:2/11/2024
*Version:v 2.0.0
*Date Last Modified:3/2/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 2/11/2024 - Added JavaScript to validate form, alert user of errors, reset, and submit form
v 2.0.0 - 3/2/2024 - Converted to jQuery, updated validation to current standards
***
******************************************************************** */
$(document).ready( () => {
    $("#submit_form").click(() => {
        //clears previous data
        $("span").text("");
        //progress bar progression
        let progressAmount = 0;//total progress
        let emailOneProgress = 10;//% based value of each question
        let emailTwoProgress = 10;
        let firstNameProgress = 10;
        let lastNameProgress = 10;
        let phoneNumberProgress = 10;
        let contactChoiceProgress = 10;
        let contactReasonProgress = 10;
        let messageProgress = 10;
        $("#progress_bar").progressbar({min: 0}, {max:80} ,{value:progressAmount});
        //gets input data
        const emailOne = $("#email_1").val();
        const emailTwo = $("#email_2").val();
        const firstName = $("#first_name").val();
        const lastName = $("#last_name").val();
        const phoneNumber = $("#phone").val();
        const methodEmail = $("#email_check").prop("checked");
        const methodText = $("#text_check").prop("checked");
        const methodPhone = $("#phone_check").prop("checked");
        const contactReason = $("#reason_for_contact").val();
        const message = $("#message").val();
        //creates validation
        const emailValidate = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;//an email
        const nameValidate = /^[a-zA-Z]+$/;//any alphabet text
        const phoneNumberValidate = /^\d{3}-\d{3}-\d{4}$/;//a phone#
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
        if(methodEmail == false && methodText == false && methodPhone == false){//checkbox
            isValid = false;
            $("#preferred_contact_method_span").text("Please pick a method of contact.");
            contactChoiceProgress = 0;
        }
        if (phoneNumber === "" || !phoneNumberValidate.test(phoneNumber)) {//pop up if option ticked
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
            phoneNumberProgress = 0;
        }
        if(contactReason == ""){
            isValid = false;
            $("#reason_for_contact_span").text("Please choose a reason.");
            contactReasonProgress = 0;
        }
        if (message === "") {
            isValid = false;
            $("#message").next().text("Please enter some text.");
            messageProgress = 0;
        }
        //shows validation progress
        progressAmount = emailOneProgress + emailTwoProgress + firstNameProgress + lastNameProgress + contactChoiceProgress + phoneNumberProgress + contactReasonProgress + messageProgress;
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
        $("#phone").val("");
        $("#phone_check").prop("checked", false);
        $("#text_check").prop("checked", false);
        $("#email_check").prop("checked", false);
        $("#reason_for_contact").val("");
        $("#message").val("");
        $("#progress_bar").progressbar({value:0});
        
        $("span").text("*");
        $("#email_1").focus();
    })

    $("#email_1").focus(); 
});