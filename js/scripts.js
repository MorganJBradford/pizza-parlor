// Business Logic for Pizza
function Pizza() {
  this.toppings = {};
  this.size = {};
  this.price = 0;
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
Pizza.prototype.setPrice = function(customerPizza) {
  if (this.size === "personal") {
    this.price += 7.99;
    return
  } else if (this.size === "small") {
    this.price += 10.99;
    return
  } else if (this.size === "medium") {
    this.price += 12.99;
    return
  } else {
    this.price += 14.99
    return
  }
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
    $("input:checkbox[name=topping]:checked").each(function() {
      let newTopping = new Topping($(this).val());
      customerPizza.addTopping(newTopping);
    })
    customerPizza.setPrice();
    console.log(customerPizza);
  });
});