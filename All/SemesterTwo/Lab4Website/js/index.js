"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:1/24/2024
*Version:v 3.0.0
*Date Last Modified:3/3/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 1/27/2024 - Prompts user to answer a question about ants, reply is put onto the page along with
                      if that reply was right, and the answer to the question.
                      Document made on 1/24/2024, added backlog on 1/27/2024
v 2.0.0 - 2/11/2024 - Modified to instead of write into the document to replace the contents of different elements
v 3.0.0 - 3/3/2024 - Converted to jQuery, replaced prompt with dialog box, modified code to be cleaner
***
******************************************************************** */
$(document).ready( () => {
    let userEntry = ("no commas Example: (10000)");//Records user response
    let userEntryParsed = $("#ant_guess").val();//Records user response but parsed, this is just for math
    let systemResponse = "";
    //Runs check of answer
    const runAntGuessCheck = (userEntry) => {
        userEntryParsed = parseInt(userEntry);//Records user response but parsed, this is just for math
        //No typed answer/default
        if(userEntry == "no commas Example: (10000)" || userEntry == ""){
            systemResponse = ("You Did Not Type An Answer! That's Okay Though!");
        }
        //Answer right
        else if (userEntryParsed == 20000000000000000){
            systemResponse = (userEntry + " Is Right! Did You Look That Up? Be honest");
        }
        //Guessed Wrong
        else if(userEntryParsed < 20000000000000000 || userEntryParsed > 20000000000000000){
            systemResponse = (userEntry + " Is Wrong!");
        }
        //Answer in the wrong format
        else{
            systemResponse = ("Your Answer Of " + userEntry + " Is An Invalid Answer!");
        }
        //fills page
        $("#fill_1").text(systemResponse);
        $("#fill_2").text("There are a lot of ants, about 20,000,000,000,000,000!");
        $("#fill_3").text("That's An estimated 20 quadrillion ants!");
        $("#fill_4").text("Want To Read More On Who Figured That Out? Try This ");
        $("#fill_5").text("Article!");
    }
    //asks user to answer
    $("#message_box").dialog({
        autoOpen: false,
        closeOnEscape: true,
        draggable: true,
        modal: true,
        buttons:[{
            text: "Submit",
            click: function() {
                userEntry = $("#ant_guess").val();
                runAntGuessCheck(userEntry);
                $(this).dialog("close");
            }
        }]
    });
    //opens ant guess box
    $("#ant_guess_button").click( () => {
        $("#message_box").dialog("open");
    });
    });