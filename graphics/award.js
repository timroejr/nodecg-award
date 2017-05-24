'use strict';

$(function () {
    nodecg.listenFor('showAward', showPlayer);
    nodecg.listenFor('hideAward', hidePlayer);

    resetHat();

	function showPlayer(data) {

        $('#awardcontainer').css('opacity', '100');
        $('#award').css('transform-origin', '100% 0%');

        var tm = new TimelineMax({paused: true});

		$('#awardTitle').text(data.player);

        //add our tweens to the timeline
        tm.to($('#award'), 0.2, {opacity: '1', ease: Quad.easeOut}, '0');
        tm.to($('#textContainer'), 0.5, {width: '50.00%'}, '0.25');
        tm.to($('#awardcontainer'), 0.5, {right: '880px'}, '0.25');


        tm.play();

    }

    function hidePlayer() {

        var tm = new TimelineMax({paused: true});

        tm.to($('#textContainer'), 0.5, {width: '0%'}, '0.450');
        tm.to($('#awardcontainer'), 0.5, {right: '555px'}, '0.450');
        tm.to($('#award'), 0.2, {opacity: '0', ease: Quad.easeOut}, '1');
        tm.addCallback(resetHat, 1.5);

        tm.play();
    }

    function resetHat() {
        $('#awardcontainer').css('opacity', '0');
        $('#award').css('opacity', '0');
        $('#awardcontainer').css('right', '555px');
    }
});
