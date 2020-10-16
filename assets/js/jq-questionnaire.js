//On Click function for map & find button - Hides Map until find button is pressed 
//(I realised this has to go before the map, or the map doesn't hide - I'm also aware I can hide the map in CSS, but we're testing Javascript here!!!!). 
//Have seperated this from locator.js file where this code was originally written. This is partially to help me keep it seperate, but mostly because the jQuery stuff needs to load first or all of its hidden element
//show up when the page loads (just for a second but it looks bad).

   
    $("#question-2").hide();
    $("#link-to-contact").hide();
    $("#sorry").hide();
    $("#locator").hide();

//If Yes to Q-1
    $('#yes').on('click', function() {
       
        $("#locator").show();
        $("#welcome").hide();
        $("#container-callout").hide();
    })

//If no to Q-1
    $('#no').on('click', function() {
       $("#question-2").show();
       $("#welcome").hide();
    })
//If yes to Q-2
    $('#2-yes').on('click', function() {
       $("#link-to-contact").show();
       $("#question-2").hide();
    })

//If no to Q-2
    $('#2-no').on('click', function() {
       $("#sorry").show();
       $("#question-2").hide();
    })

//If Restart
     $('#restart').on('click', function() {
       $("#welcome").show();
       $("#sorry").hide();
    })








