var user = "Andrew";
var salutation = "Here To Serve Your Encabulation Needs, ";
var greeting = salutation + user;

var greetingEl = document.getElementById('Greeting');
greetingEl.textContent = greeting;

var price = 50000;
var studentDiscount = 5;
var studentPrice = price * ((100 - studentDiscount)/100);

var priceEl = document.getElementById('price');
priceEl.textContent = "Price: $" + price;

var studentPriceEl = document.getElementById('studentPrice');
studentPriceEl.textContent = "Student Price: $" + studentPrice;