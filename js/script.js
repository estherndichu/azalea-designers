$(document).ready(function() {
    $("form#contact-form").on("submit", function(event) {
        event.preventDefault();
        let name = $("input#form_name").val();
        let email= $("input#form_email").val();
        let message = $("input#form_message").val();
        let result = ("Hello " + name + " we received your message. Thank you for reaching to us well get back soon");
    
        $("#output").text(result);
 
});
});