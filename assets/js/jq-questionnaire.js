/*This page concerns JQuery code that hides or shows navigation elements on the index.html page depending what options are chosen. 
I've called it questionnaire - although that's probably not the best way to describe it. I split this off from locator.js - the file that has JS code for the Google MAPS API
because it's pretty different and I didn't want it to get lost in with the google code. 
*/

//Following element are hidden on page launch, depending on answers to questions, the functions below take place. 
    $("#question-2").hide();
    $("#link-to-contact").hide();
    $("#sorry").hide();
    $("#locator").hide();
    $("list-container").hide();

//If Yes to Q-1
    $('#yes').on('click', function() {
       
        $("#locator").show();
        $("#welcome").hide();
        $("#container-callout").hide();
    });

//If no to Q-1
    $('#no').on('click', function() {
       $("#question-2").show();
       $("#welcome").hide();
    });
//If yes to Q-2
    $('#2-yes').on('click', function() {
       $("#link-to-contact").show();
       $("#question-2").hide();
    });

//If no to Q-2
    $('#2-no').on('click', function() {
       $("#sorry").show();
       $("#question-2").hide();
    });

//If Restart
     $('#restart').on('click', function() {
       $("#welcome").show();
       $("#sorry").hide();
    });

