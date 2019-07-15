// var request = require('request');
// var date = new Date();
// var url = "http://192.168.2.254:8000/api_json.asp?";
// var cmd = "cmd=show_metering";
// var mac = "deviceid=000D6F0003BB963B";
// var auth = "auth=YWRtaW46YWRtaW4=";
// var ampersand = "&";

// console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

// console.log('Hello');

// request({
// 	uri: url + cmd + ampersand + mac + ampersand + auth,
// 	method: "GET",
// 	timeout: 10000,
// 	followRedirect: true,
// 	maxRedirects: 10
// }, function(error, response, body) {
// 	console.log(body);
// });

var async = require('async');
var admin = require('firebase-admin');
var serviceAccount = require("./mdec-b8546-firebase-adminsdk-pcf67-5621673699.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mdec-b8546.firebaseio.com"
});

// admin.database().ref('locationList').child('mdec').once('value').then(function(snap) {
// 	console.log(JSON.stringify(snap.val()));
// });

async.parallel([
	function(callback) {
		admin.database().ref('floorplanList').child('mdec').child('mdec2').child('floorplan').child('mdec2_floorplan2').once('value').then(function(snap) {
			callback(null, 'First call: ' + snap.val().name);
		});
	},
	function(callback) {
		admin.database().ref('locationList').child('mdec').once('value').then(function(snap) {
			callback(null, 'Second call: ' + snap.val().name);
		});
	}
], function(error, results) {
	console.log(results.length);
	results.forEach(function(result) {
		console.log(result);
	});
});