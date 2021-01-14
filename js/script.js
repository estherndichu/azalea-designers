
<<<<<<< HEAD
$(document).ready(function() {
    $("form#contact-form").on("submit", function(event) {
        event.preventDefault();
        let name = $("input#form_name").val();
        let email= $("input#form_email").val();
        let message = $("input#form_message").val();
        let result = ("Hello " + name + " we received your message. Thank you for reaching to us well get back soon");
    
        $("#output").text(result);
 
});
$("form#feedback-form").on('submit', function(event) {
    event.preventDefault();
    let user_name = $("input#user_name").val();
    let feedback = $("textarea#feedback").val();

    localStorage.setItem("user", user_name);
    localStorage.setItem("feedback", feedback);



    $("#review").append("<div class='carousel-item'>"+"<p>"  + feedback + "</p> "+"<p>" + user_name + "</p>"+"</div>" );


});
// $("form#feedback-form").on('submit', function(event){
// $("#review").append("<div class='carousel-item'</div>"  + "<div class='controls'" + feedback);
// })
});
=======

>>>>>>> ft-mens-wear-page
