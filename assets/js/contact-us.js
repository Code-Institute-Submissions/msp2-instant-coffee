function sendMail(contactForm) {
    emailjs.send("instantcoffee", "Instant Coffee", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "company": contactForm.company.value,
        "message": contactForm.message.value
    });
    return false;
}


//https://joomla.stackexchange.com/questions/4614/make-submit-button-inactive-until-fields-have-been-filled

$("#submit").prop('disabled', true);

let toValidate = $('#name, #email, #message'),
    valid = false;
toValidate.keyup(function () {
    if ($(this).val().length > 0) {
        $(this).data('valid', true);
    } else {
        $(this).data('valid', false);
    }
    toValidate.each(function () {
        if ($(this).data('valid') == true) {
            valid = true;
        } else {
            valid = false;
        }
    });
    if (valid === true) {
        $("#submit").prop('disabled', false);
    } else {
        $("#submit").prop('disabled', true);
    }
});