'use strict';

const body = document.getElementById('body');

$('#show').click(function() {
	var data = {}
	data.player = body.value;
	nodecg.sendMessage('showAward', data);
	nodecg.log.debug("sent");
});

$('#hide').click(function() {
	nodecg.sendMessage('hideAward', '');
	console.log("sent");
	nodecg.log.debug("sent");


});
