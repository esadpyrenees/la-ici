var pages = {

    init: function(){
        pages.loadPage('home.html', $home);
        $body.on('click', '#menu a', function(e){
            e.preventDefault();
            var url = $(this).attr('href'),
                $dest = $($(this).attr('data-dest'));
            pages.loadPage(url, $dest)
        })
    },

    preload:function(){

    },

    loadPage:function(url, $dest){

        $.ajax({
            
            url: url,

            success:function(data){
                // load result in virtual element
                var $dom = $(document.createElement("html"));
                $dom[0].innerHTML = data; 
                // retrieve content
                var $content = $dom.find('#'+$dest[0].id);
                
                // time out before hiding loading
                var s = setTimeout(function(){
                    
                    // load content in zone
                    $dest.html($content);
                    $dest.addClass('loaded');
                    
                    pages.leavePage($current_page);
                    pages.changePage($dest);
                    $current_page = $dest;

                }, 400)
            },
            error:function(){
                // shit…
            }
        });

    },

    leavePage:function($from){
        $body.removeClass()
        $from.removeClass('visible');
        
        if($from[0].id=='avant'){
            texte.destroy();
        }
        if($from[0].id=='home' && BV != undefined){
            video.destroy();
        }
    },

    changePage:function($to){
        section_name = $to[0].id;

        // exec init
        eval(section_name).init();
        
        //add body class
        $body.addClass(section_name);
        //show section
        $to.wait(200).addClass('visible');
        // play first sound
        
    }

    



}