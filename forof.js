var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

let count = 0;

for (var prop in obj) {
	console.log(count++ + ' | ' + prop)
	if (obj.hasOwnProperty(prop)) {
		// console.log(`obj.${prop} = ${obj[prop]}`);
	} 
}