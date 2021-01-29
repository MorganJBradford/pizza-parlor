Pizza.prototype.setPrice = function(customerPizza) {
  switch (this.size) {
    case ("personal"):
      this.price += 7.99;
      break;
    case ("small"):
      this.price += 9.99;
      break;
    case ("medium"):
      this.price += 11.99;
      break;
    case ("large"):
      this.price += 13.99;
      break;
    default:
      this.price = "please select a size"
  }
}

function displayTappings(pizzaToDisplay) {
  let toppingList = $("ul#ordered-toppings");
  let htmlForContactInfo = "";
  Object.keys(pizzaToDisplay.toppings).forEach(function(key) {
    const topping = toppingToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};