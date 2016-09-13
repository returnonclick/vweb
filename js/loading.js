/**
 * Created by lucasnascimento on 26/07/2016.
 */
$(document).ready(function() {
    $('.ball').removeClass('stop');

    $('.triggerFull').click(function() {
        $('.ball').removeClass('stop').delay(1).queue(function(next){
            $(this).removeClass('stop');
            next();
        });
        return false;
    });

});

$(document).ready(function() {
    $('#content').addClass('fullwidth');
    $('.triggerFull').click(function() {
        $('#content').removeClass('fullwidth').delay(10).queue(function(next){
            $(this).addClass('fullwidth');
            next();
        });
        return false;
    });
});

(function ( $ ) {
    $.fn.extend({

        mouseParallax: function(options) {

            var defaults = { moveFactor: 5, zIndexValue: "-1", targetContainer: 'body' };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                var background = $(this);

                $(o.targetContainer).on('mousemove', function(e){

                    mouseX = e.pageX;
                    mouseY = e.pageY;

                    windowWidth = $(window).width();
                    windowHeight = $(window).height();

                    percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2);
                    percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2);

                    leftString = (0-percentX-o.moveFactor)+"%";
                    rightString = (0-percentX-o.moveFactor)+"%";
                    topString = (0-percentY-o.moveFactor)+"%";
                    bottomString = (0-percentY-o.moveFactor)+"%";

                    background[0].style.left = leftString;
                    background[0].style.right = rightString;
                    background[0].style.top = topString;
                    background[0].style.bottom = bottomString;
                    if(o.zIndexValue) {
                        background[0].style.zIndex = o.zIndexValue;
                    }
                });
            });
        }
    });
} (jQuery) );

$(document).ready(function() {

    $('#background').mouseParallax({ moveFactor: 5 });
    $('#return').mouseParallax({ moveFactor: 10 });
    $('#on').mouseParallax({ moveFactor: 15 });
    $('.ball').mouseParallax({ moveFactor: 15 });
    $('#click').mouseParallax({ moveFactor: 20 });


    $('body').height(3000);

});