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
Pizza.prototype.findTopping = function(id) {
  if (this.toppings[id] != undefined) {
    return this.toppings[id];
  }
  return false;
}
Pizza.prototype.setPrice = function(customerPizza) {
  for (let i = 0; i <= this.currentId; i++) {
    if (i > 3) {
    this.price += 0.5;
    };
  };
  if (this.size === "personal") {
    this.price += 7.99;
    return
  } else if (this.size === "small") {
    this.price += 9.99;
    return
  } else if (this.size === "medium") {
    this.price += 11.99;
    return
  } else if (this.size === "large") {
    this.price += 13.50;
    return
  } else {
    return false
  };
};

// Business Logic for Topping
function Topping(topping) {
  this.topping = topping;
}

// User Interface Logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    $("#pizza-responses").show();
    let customerPizza = new Pizza;
    customerPizza.size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      let newTopping = new Topping($(this).val());
      customerPizza.addTopping(newTopping);
    })
    customerPizza.setPrice();
    $(".size").text(customerPizza.size);
    const pp = customerPizza.findTopping(2);
     console.log(pp);
  });
});