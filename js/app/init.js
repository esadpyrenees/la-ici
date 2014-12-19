// SOUND
var players = [], // sound players
	current_player,
	is_sound_initialized=false; // current sound player

// VIDÉO	
var BV; // big video holder

// FRAGMENTS
var $blocks,
	fragments_timeout;


// SVG
var $clip;	

// TABLEAUX
var $home,
	$about,
	$avant,
	$dehors,
	$dedans,
	$current_page; 

// COMMON
var $body,
	$win,
	wwidth,
	wheight;

$(function(){

	$body = $('body');
	$win = $(window);
	$avant = $('#avant');
	$dehors = $('#dehors');
	$dedans = $('#dedans');
	$home = $('#home');
	$about = $('#about');

	wwidth = $win.width();
	wheight = $win.height();
	
	
	//texte.init();	

	$current_page = $home;

	pages.init();
	//video.init();


})