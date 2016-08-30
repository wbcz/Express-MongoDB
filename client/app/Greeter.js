require("./greetere.css");
var a=require('./a');
a.sayHello();
var b = require('./b');
b.sayHello();

module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = "Hi there 444!";
	return greet;
}