'use strict';

// var currentTabUrl;
// chrome.browserAction.onClicked.addListener(function(tab) {
// 	currentTabUrl = tab.url;

// });

// console.log(currentTabUrl);

$('#ex1').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

$('#submit').click(function() {
		console.log('I clicked!');
		console.log(chrome.tabs);
		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.create({url: tab.url});
		});
	});

console.log('\'Allo \'Allo! Popup');
