$(document).ready(function() {

    $("#map").hide();
    $('#find-button').on('click', function() {
        $("#map").show();
    })

});

//Need to get the below working. It's to let you press 'Enter' in the search bar. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter
let enter = document.getElementById('type-location');
        enter.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) { 
                event.preventDefault();
                document.getElementById('find-button').click();
    }
});
    