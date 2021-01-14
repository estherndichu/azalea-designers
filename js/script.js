
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
function renderCart(items) {
    const $cart = document.querySelector(".cart");
    const $total = document.querySelector(".total");
    

    $cart.innerHTML = items.map((item) => `
            <table classs="col-md-12 col-sm-6"> 
            
            <tr>
                <td class="col-sm-1">${item.id}</td>
                <td class="col-sm-2">${item.name}</td>
                <td class="col-sm-1">${item.quantity}</td>

                <td class="col-sm-1">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},1)">+</button>
                </td>
                <td class="col-sm-1">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},-1)">-</button>
                </td>
                <td class="text-right" class="col-sm-1">Ksh${item.price}</td>
                <td class="text-right"><Button class="btn btn-primary" class="col-sm-1" onClick="cartLS.remove(${item.id})">Delete</Button></td>
            </tr>
           


            </table>`
            
            ).join("");


`<div class="container col-md-12">
    <div class="k">`
    $total.innerHTML = "$.:" + cartLS.total();`

    </div>
   
 </div>`

}
function abcd(){
       
    
}
abcd();
renderCart(cartLS.list());
cartLS.onChange(renderCart);
});

