'use strict';

$('#sendPlayer').click(function() {
	var data = {}
	data.player = $('#award').val();
	nodecg.sendMessage('showPlayer', data);
});

$('#hidePlayer').click(function() {
	nodecg.sendMessage('hidePlayer', ''); 
});