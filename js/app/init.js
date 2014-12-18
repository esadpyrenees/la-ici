// SOUND
var players = [], // sound players
	current_player; // current sound player

// VIDÉO	
var BV; // big video holder

// FRAGMENTS
var $blocks; // big video holder

// COMMON
var $body,
	$win,
	wwidth,
	wheight;


$(function(){

	$body = $('body');
	$win = $(window);

	wwidth = $win.width();
	wheight = $win.height();
	
	sound.init();	
	mouse.init();	
	texte.init();	
	//video.init();


	$('#test').on('click', function(){

		//video.newBigVideo('media/video/dock.mp4')
		vide.fade('out', function(){})
	})

})