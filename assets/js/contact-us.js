function sendMail(contactForm) {
    emailjs.send("instantcoffee", "Instant Coffee", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "company": contactForm.company.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error)
        }
    )
    return false;
}