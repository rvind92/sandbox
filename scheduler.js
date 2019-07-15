var moment = require('moment');
var scheduler = require('node-schedule');

startTime = moment.unix((Date.now() / 1000) + 5);
endTime = moment.unix((Date.now() / 1000) + 30);

var startJob = scheduler.scheduleJob(startTime, function() {
	console.log('Started job...');
});

var endJob = scheduler.scheduleJob(endTime, function() {
	console.log('Job ended.');
});