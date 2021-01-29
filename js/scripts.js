// Business Logic for Pizza
function Pizza() {
  this.toppings = {};
  this.size = {};
  this.currentId = 0;
}
Pizza.prototype.addTopping = function(topping) {
  topping.id = this.assignId();
  this.toppings[topping.id] = topping;
}
Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// Business Logic for Topping
function Topping(topping) {
  this.topping = topping;
}

// User Interface Logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    // $("#pizza-responses").show();
    let customerPizza = new Pizza;
    customerPizza.size = $("input:radio[name=size]:checked").val();
  });
});