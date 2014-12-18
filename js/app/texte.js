var fragments_life = 8000;

var texte = {
	
	// requires randomize

	init: function(){
		$blocks = $('<div class="fragments"></div>');
		$body.append($blocks);
		texte.insertFragments(fragments, 3);
	},
            

	insertFragments: function(source, max) {
		// insère 'max' phrases de la source

		var selected_fragments = [],
			// nombre de fragments aléatoires
			// entre 1 et max
            number_of_fragments = Math.round(Math.random()*(max-1)) + 1;

        // insère un bloc de mise en page
        var $block = $('<div class="block"></div>');
        $blocks.append($block);
        $block.css({
            'top': Math.random() * (wheight - 300),
            'left': Math.random() * (wwidth - 350) + 350
        });


        // appelle l’autodestruction du block
        texte.deleteBlock($block);

        // Sélectionne les fragments au sein de la source
        for(var i = 0; i < number_of_fragments; i++){
            var random_number = Math.floor(Math.random()*source.length - 1) + 1;
            var selected_fragment = source[random_number]
            selected_fragments.push(selected_fragment)
		}
		// console.log(selected_fragments)

		// insère les fragments au sein du bloc
        for (var i = 0; i < selected_fragments.length; i++) {
            var $text = $('<div class="text">'+ selected_fragments[i] +' </div>')
            
            $text.css({
                'top': Math.random() * 50 + 50,
                'left': Math.random() * 50 - 350,
                'font-size':Math.random() * 30 + 12
            })
            $block.append($text);
            $text.wait(i * randomize(50,200)).addClass('visible');

        };

        var s = setTimeout(function(){
        	texte.insertFragments(fragments, 3);
        }, randomize(3000, 8000)); // 1-2 seconds
    },

    deleteBlock: function($block){
    	// supprime le block
        // après avoir fait disparaitre en fondu chacun de ses éléments

        var my_texts = $block.find('.text');
        var s = setTimeout(function(){
        	my_texts.each(function(i){
        		$(this).wait(i * 500).removeClass('visible')
	        })
        }, fragments_life)
		
        $block.wait(my_texts.length * 500 + fragments_life + 2000).remove();

    }
            
}