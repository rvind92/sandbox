'use strict'

const fs = require('fs');
const cache = {};

// debugger;
function inconsistentRead(filename, callback) {
	if(cache[filename]) {
		//invoked synchronously
		callback(cache[filename]);
		// setTimeout(() => callback(cache[filename]), 0);
		// process.nextTick(() => callback(cache[filename]));
	} else {
		//asynchronous function
		fs.readFile(filename, 'utf8', (err, data) => {
			cache[filename] = data;
			callback(data);
		});
	}
}

function createFileReader(filename) {
	const listeners = [];
	inconsistentRead(filename, value => {
		listeners.forEach(listener => {
			console.log('listener -> ', listener)
			listener(value)
		});
	});

	// inconsistentRead(filename, function(value) {
	// 	listeners.forEach(function(listener) {
	// 		listener(value);
	// 	});
	// });

	return {
		onDataReady: listener => {
			console.log('onDataReady -> ', listener)
			listeners.push(listener)
		}
	};

}

const reader1 = createFileReader('data.txt');
reader1.onDataReady(data => {
	console.log('First call data: ' + data);

	//...sometime later we try to read again from
	//the same file
	const reader2 = createFileReader('data.txt');
	reader2.onDataReady(data => {
		console.log('Second call data: ' + data);
	});
});

// inconsistentRead(filename, function(value) {
	// 	listeners.forEach(function(listener) {
	// 		listener(value);
	// 	});
	// });
