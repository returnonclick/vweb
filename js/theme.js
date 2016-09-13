////////////////////////////////////////////////////////////////
// Page preloader (display loading animation while page loads)
////////////////////////////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $("#preloader").fadeOut("slow");
});



//////////////////////////////////////////////////////////////////////////////////////////
// Off canvas menu (more info: http://codyhouse.co/gem/secondary-expandable-navigation/)
//////////////////////////////////////////////////////////////////////////////////////////

jQuery(document).ready(function($){
    var $lateral_menu_trigger = $('#cd-menu-trigger'),
        $content_wrapper = $('#body-content'),
        $navigation = $('header');

    //open-close lateral menu clicking on the menu icon
    $lateral_menu_trigger.on('click', function(event){
        event.preventDefault();
        
        $lateral_menu_trigger.toggleClass('is-clicked');
        $navigation.toggleClass('lateral-menu-is-open');
        $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            $('body').toggleClass('overflow-hidden');
        });
        $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
        
        //check if transitions are not supported - i.e. in IE9
        if($('html').hasClass('no-csstransitions')) {
            $('body').toggleClass('overflow-hidden');
        }
    });

    //close lateral menu clicking outside the menu itself
    $content_wrapper.on('click', function(event){
        if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
            $lateral_menu_trigger.removeClass('is-clicked');
            $navigation.removeClass('lateral-menu-is-open');
            $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                $('body').removeClass('overflow-hidden');
            });
            $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
            //check if transitions are not supported
            if($('html').hasClass('no-csstransitions')) {
                $('body').removeClass('overflow-hidden');
            }

        }
    });

    //close lateral menu clicking on link
    $(".sub-menu > li > a, .cd-single-item-wrapper > li > a").click(function(e){
        $lateral_menu_trigger.removeClass('is-clicked');
        $navigation.removeClass('lateral-menu-is-open');
        $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            $('body').removeClass('overflow-hidden');
        });
        $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
        //check if transitions are not supported
        if($('html').hasClass('no-csstransitions')) {
            $('body').removeClass('overflow-hidden');
        }
        e.stopPropagation();
    });

    //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
    $('.item-has-children').children('a').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
    });
});



/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -14
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

////////////////////////////////////////////////////////////////////
// OWL Carousel (more info: http://www.owlcarousel.owlgraphic.com)
////////////////////////////////////////////////////////////////////

// Global carousels
$('.owl-carousel').each( function() {
    var $carousel = $(this);
    $carousel.owlCarousel({

        items: $carousel.data("items"),
        loop: $carousel.data("loop"),
        margin: $carousel.data("margin"),
        center: $carousel.data("center"),
        startPosition: $carousel.data("start-position"),
        animateIn: $carousel.data("animate-in"),
        animateOut: $carousel.data("animate-out"),
        mouseDrag: $carousel.data("mouse-drag"),
        autoHeight: $carousel.data("autoheight"),
        autoplay: $carousel.data("autoplay"),
        autoplayTimeout: $carousel.data("autoplay-timeout"),
        autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
        autoplaySpeed: $carousel.data("autoplay-speed"),
        nav: $carousel.data("nav"),
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        navSpeed: $carousel.data("nav-speed"),
        dots: $carousel.data("dots"),
        dotsSpeed: $carousel.data("dots-speed"),
        video: true,
        responsive: {
            0: {
                items: $carousel.data("items-mobile-portrait"),
            },
            768: {
                items: $carousel.data("items-mobile-landscape"),
            },
            992: {
                items: $carousel.data("items-tablet"),
            },
            1200: {
                items: $carousel.data("items"),
            }
        }

    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////
//
// Deferring embed videos (Youtube, Vimeo).
// 
// When you have videos from Youtube, Vimeo or just about any other provider embedded 
// in your webpages it causes your page to load slower. Just about every video can be deferred 
// until after your initial pageload which will allow your page to load quickly 
// without having to gather all the files and resources that the video is requesting.
//
// More info: https://www.feedthebot.com/pagespeed/defer-videos.html
//
//////////////////////////////////////////////////////////////////////////////////////////////////

function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;



/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});
