var mediaAspect = 16/9;

var home = {

    init:function(){
		
		home.preload()
	},


	preload:function(){

		var windowW = $(window).width();
		var windowH = $(window).height();
		var windowAspect = wwidth/wheight;
		if (windowAspect < mediaAspect) {
			// taller
			$('#preloader').css({
				width: 'auto',
				height: windowH,
				top:0,
				left:-(windowH*mediaAspect-windowW)/2
			});
			
		} else {
			// wider
			$('#preloader').css({
				width: windowW,
				height: 'auto',
				top:-(windowW/mediaAspect-windowH)/2,
				left:0
			});
			
		}

		video.init()
	}	

}
