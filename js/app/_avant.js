var avant = {
    
    init:function(){

    	sound.checkIfSoundIsInitialized('avant');

    	texte.init();
    	
    	setInterval(function() { 
			$('#slideshow > div:first')
				.fadeOut(200)
				.next()
				.fadeIn(200)
				.end()
				.appendTo('#slideshow');
			},  randomize(3000, 6000));
    }
}