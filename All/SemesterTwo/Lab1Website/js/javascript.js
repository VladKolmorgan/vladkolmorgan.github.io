"use strict";
let userEntry = prompt("There are a lot of ants on Earth, can you guess how many?", "no commas Example: (10000)");//Records user response
let userEntryParsed = parseInt(userEntry);//Records user response but parsed, this is just for math

document.write("<h2>How Many Ants On Earth Are There?</h2>");
//No typed answer/default
if(userEntry == "no commas Example: (10000)"){
    document.write("<p>You Did Not Type An Answer! That's Okay Though!</p>");
}
//Answer right
else if (userEntryParsed == 20000000000000000){
    document.write("<p>" + userEntry + " Is Right! Did You Look That Up? Be honest</p>");
}
//Guessed Wrong
else if(userEntryParsed < 20000000000000000 || userEntryParsed > 20000000000000000){
    document.write("<p>" + userEntry + " Is Wrong!</p>");
}
//Answer in the wrong format
else{
    document.write("<p>Your Answer Of " + userEntry + " Is An Invalid Answer!</p>");
}
document.write(`<p>There are a lot of ants, about 20,000,000,000,000,000!<br>
That's An estimated 20 quadrillion ants!<br>
Want To Read More On Who Figured That Out? Try This <a href="https://www.science.org/content/article/how-many-ants-live-earth" target="_blank">Article</a>!
</p>`);
