var dedans = {
    init:function(){
	    sound.checkIfSoundIsInitialized('dedans');
	    dedans.svg();
	},
	svg:function(){
		$clip = $('<svg><defs><clipPath id="clipping"><polygon points="'+ wwidth + ',' + wheight + ' 0,0 ' + wwidth + ',0 "/></clipPath></defs></svg>');
		$body.append($clip);

		$('.clipimg').css({
			'clip-path': 'url(#clipping)'
		})
	}
}