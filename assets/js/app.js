$(function(){
    
    // Behaviour when ready ***
    
    setTimeout( function() { 
        $("body").addClass("loaded");
        $(window).scroll();
    }, 200);
    
    
    // Vars & Init ************
        
    detectResize();
    detectScroll();

    
    // Triggers ***************
    
    $(document).on("click", "nav.navbar .navbar-toggler", function(e) {
        e.preventDefault();
        
        $("body").toggleClass("open-navbar");
    })
    
    
    $(".scroll-to").on("click", function(e) {
        e.preventDefault();
        scrollTo($($(this).attr("data-scroll")));
    });
    
    
    // Swiper ***************
    
    if ($(".swiper.brands .swiper-container").length > 0) {

        swiper = new Swiper ('.swiper.brands .swiper-container', {
            speed: 1000,
            loop: false,
            grabCursor: true,
            slidesPerView: 7,
            breakpoints: {
                1200: {
                    slidesPerView: 6,
                },
                992: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 3,
                },
                450: {
                    slidesPerView: 2,
                }
            }
        });
    }
    
    if ($(".swiper.testimonials .swiper-container").length > 0) {

        swiper = new Swiper ('.swiper.testimonials .swiper-container', {
            speed: 1000,
            loop: true,
            autoHeight: true,
            grabCursor: true,
            effect: 'fade',
            crossFade: false,
            pagination: {
                el: '.swiper-pagination.testimonials',
                clickable: true,
            } 
        });
    }
    
        
    // Resize ***************

    $(window).on('resize', function(){
        detectResize();
        detectScroll();
    });
    
    
    // Scroll ***************
    
    $(window).on('scroll', function() {
        detectScroll();
    });
    
    
    // Functions ***************
 
    function detectResize() { }

    function detectScroll() { 
    
        // Trigger in-view
        
        var window_height = $(window).height();
        var window_top    = $(window).scrollTop();
        var window_bottom = window_top + window_height;
        var timer         = 50;
        var i             = 1;
        
        $.each($.find('.animate:not(.in-view)'), function() {

            var element                 = $(this);
            var element_height          = $(element).outerHeight();
            var element_top_position    = $(element).offset().top + 150;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top) && (element_top_position <= window_bottom)) {
                setTimeout(function(){
                    element.addClass("in-view");
                }, timer*i);
            }
            
            i++;
        });
    
    }
    
    function scrollTo(obj, speed, fx){

        if (typeof(speed) == 'undefined') {
            speed = 1200;
        }
        if (typeof(fx) == 'undefined') {
            fx = 'easeInOutExpo';
        }

        $('html, body').animate({
            scrollTop: obj.offset().top
        }, speed, fx);
    }
    
    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }
});
