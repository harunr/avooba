
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
              
        
        $("#phone-nav").click(function(){
            $(".main-nav").slideToggle()
            
            $('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
            $('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
        });
        
        $('.expand-btn').click(function(){
            $('div.search-area').toggleClass('search-box-expanded')
        });


        // Begin input common focus and blur for value.
        $('#searchBox').keyup(function(){
            $('div.search-area').addClass('value-added')
        })


        $('#searchBox').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $('div.search-area').removeClass('value-added')
            }
        });
        
        $("#scrollDown").bind('click', function(){
            if($(window).width() > 767 ){
                $('body, html').stop(true, true).animate({
                    scrollTop: $("#gallary-section").offset().top - 90
                }, 1500, "easeInOutCubic")
            }
            else{
                $('body, html').stop(true, true).animate({
                    scrollTop: $("#gallary-section").offset().top - 55
                }, 1500, "easeInOutCubic")
            }
        })
        
        $("#goTop").bind('click', function(){
            $('body, html').stop(true, true).animate({
                scrollTop: $("body").offset().top - 0
            }, 1500, "easeInOutCubic")
        })
        
        
        if($(".shop-content-section").length){
            $("body").addClass("shop-page-body")
        }
        
        
        $(".aside-nav ul li").find("ul").parent().addClass("hasSubnav")
        $(".aside-nav ul li ul li").find("ul").parent().removeClass("hasSubnav")
        $(".aside-nav ul li ul li").find("ul").parent().addClass("hasSubmenu")
        
        

        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > $("#home-hero").height() ));

            if($(window).width() > 767 ){

                if($(window).scrollTop() > 10){
                    $(".header-area").addClass("fixedTop")
                }
                else{
                    $(".header-area").removeClass("fixedTop")
                }
                            
                
                // The varriables 
                var $titleDiv = $('.slide-info');
                var windowScroll = $(this).scrollTop(); 

                $titleDiv.css({ 
                    //'margin-top' : - (windowScroll / 5) + "px", 
                    'opacity' : 1 - (windowScroll / 550)
                    //transform: ("translate(0%," + (-50 + (windowScroll / 5)) + "%)"),
                });

                jQuery('#home-hero  li.slide, .hero-banner-wrap').css({
                    'background-position': 'center ' + (-windowScroll / 1.5) + "px"
                });


            } // End if function


        });
        

        
        
        $(window).scroll(function(){
            if( $(window).scrollTop() > $(window).height() ){
                $('body').addClass("activeTopF")
            }
            else{
                $('body').removeClass("activeTopF")
            }
        })


        //scrill up and down function 
        var mywindow = $(window);
        var mypos = mywindow.scrollTop();
        var up = false;
        var newscroll;
        mywindow.scroll(function () {
            newscroll = mywindow.scrollTop();
            if (newscroll > mypos && !up) {
                $('.header-area').addClass("headroom-unpinned")
                $('.header-area').removeClass("headroom-pinned")
                up = !up;
                //console.log(up);
            } else if(newscroll < mypos && up) {
                $('.header-area').addClass("headroom-pinned")
                $('.header-area').removeClass("headroom-unpinned")
                up = !up;
            }
            mypos = newscroll;
        });
        
        
        
        // This function for scroll animation

        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');

        // End animation function
        
    
        
		
	})// End ready function.

	$(window).load(function(){
        // Begin common slider
        if ( $('#home-hero').length == 0 ) return false

        $('#home-hero').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: true,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        });
        
        $('.gallary-slider-wrap').flexslider({
            animation:"fade",
            slideshow: false,
            directionNav: false,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        });

    	$('div.slider-wrap video').trigger('play');

    })
	

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})