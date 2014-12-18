var video = {

	init : function(){
		BV = new $.BigVideo({useFlashForFirefox:false});
	    BV.init();
	    BV.show('media/video/river.mp4', {
	    	altSource:'media/video/river.ogv',
	    	ambient:true
	    });
	},


	newBigVideo: function(src){
		ogv = src.replace('mp4', 'ogv');
		BV.init();
		BV.show(src, {
	    	altSource:ogv,
	    	ambient:true
	    });
	}

	fade: function(dir, fallback){
		$bvel = $('.big-video-wrap');
		if(dir=='out'){
			$bvel.fadeOut()
		} else {
			$bvel.fadeIn()
		}
		fallback();
	}
	
}