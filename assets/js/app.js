$(function(){
    
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

    function detectScroll() { }
    
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
