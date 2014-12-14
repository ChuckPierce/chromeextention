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
		// var sliderYear = $('#ex1').slider('getValue');
		// console.log(sliderYear);
		chrome.tabs.getSelected(null, function(tab) {
			$.post('/', {url: tab.url, years: sliderYear})
			.done(function(newUrl) {
				chrome.tabs.create({url: newUrl});
			});
		});
	});

console.log('\'Allo \'Allo! Popup');
