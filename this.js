var hello = 'Aravind'
var goodbye = 'Krishna'

var Handle = function() {
	this.hello = hello;
	this.goodbye = goodbye;

	this.printName = function() {
		console.log(this.hello + ' ' + this.goodbye);
	}
}

var type = new Handle();

// type.printName();

// console.log(module)

function greet() {
	console.log('Hello');
}

var myObj = {};

myObj.greet();