"use strict";
/*********************************************************************
***
*Original Author:Vlad Kolmorgan
*Date Created:1/24/2024
*Version:v 2.0.0
*Date Last Modified:2/11/2024
*Modified by:Vlad Kolmorgan
*Modification log: 
v 1.0.0 - 1/27/2024 - Prompts user to answer a question about ants, reply is put onto the page along with
                      if that reply was right, and the answer to the question.
                      Document made on 1/24/2024, added backlog on 1/27/2024
v 2.0.0 - 2/11/2024 - Modified to instead of write into the document to replace the contents of different elements
***
******************************************************************** */
const $ = selector => document.querySelector(selector);
let userEntry = prompt("There are a lot of ants on Earth, can you guess how many?", "no commas Example: (10000)");//Records user response
let userEntryParsed = parseInt(userEntry);//Records user response but parsed, this is just for math
let systemResponse = "";
const fill1 = $("#fill_1");
const fill2 = $("#fill_2");
const fill3 = $("#fill_3");
const fill4 = $("#fill_4");
const fill5 = $("#fill_5");

//No typed answer/default
if(userEntry == "no commas Example: (10000)"){
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

fill1.textContent = systemResponse;
fill2.textContent = ("There are a lot of ants, about 20,000,000,000,000,000!");
fill3.textContent = ("That's An estimated 20 quadrillion ants!");
fill4.textContent = ("Want To Read More On Who Figured That Out? Try This ");
fill5.textContent = ("Article!");
