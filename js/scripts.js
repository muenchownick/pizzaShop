// business logic
var cheese = [];
var meat = [];
var veggie = [];
var Pizza = function(size, meat, veggie, cheese) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
  this.cheese = cheese;
}
Pizza.prototype.price = function() {
  var totalPrice = 8

  for (i = 0; i < cheese.length; i++) {
    if (this.cheese[i] === "extraCheese") {
      totalPrice += 2;
    }}
    for (i = 0; i < meat.length; i++) {
    if (this.meat[i] === "sausage") {
      totalPrice += 1;
    }if (this.meat[i] === "bacon") {
      totalPrice += 1.5;
    }}

  for (i = 0; i < veggie.length; i++) {
    if (this.veggie[i] === "mushrooms") {
      totalPrice += .5;
    } else if (this.veggie[i] === "onions") {
      totalPrice += .8;
    }
     else if (this.veggie[i] === "blackolives") {
      totalPrice += .75;
    }}

  if (this.size === "medium") {
    totalPrice += 3;
  } else if (this.size === "large") {
    totalPrice += 6;
  }
  return totalPrice;
};


// user interface logic
$(document).ready(function() {
  $("form#blank").submit(function() {
    event.preventDefault();
      var size = $("#pizza-size").val();
      var pizza = new Pizza (size, meat, veggie, cheese);
       $("input:checkbox[name=veggie]:checked").each(function(){
         veggie.push($(this).val());
       });
        $("input:checkbox[name=meat]:checked").each(function(){
         meat.push($(this).val());
        });
         $("input:checkbox[name=cheese]:checked").each(function(){
          cheese.push($(this).val());
         });

         meat = [];
         veggie = [];

        $("#pizzaList").append("<li><span class='contact'>" + pizza.size + "</span></li>")

      $(".contact").last().click(function(){
      $("#results").show();

      $(".size-location").text(pizza.size);
      $(".meat-location").text(pizza.meat);
      $(".veggie-location").text(pizza.veggie);
      $(".price-location").text(pizza.price());

    event.preventDefault();
  });
  });
});
