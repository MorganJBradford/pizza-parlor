// Business Logic for Pizza
function Pizza() {
  this.toppings = {};
  this.size = {};
  this.currentId = 0;
}
Pizza.prototype.addTopping = function(topping) {
  this.toppings[topping.topping] = topping;
}
// Business Logic for Topping
function Topping(topping) {
  this.topping = topping;
}