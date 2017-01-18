var count = 0;
var position = 0;
var width = 0;

var sliderVisible = false;

$(function() {  
    $('section').hide();
    $('nav a').click(function () {
        $('nav a').each(function () {
            $(this).removeClass('active');
        })
        if ($(this).hasClass('home-button')) {
            sliderVisible = false;
            fadeInToMain('.banner');
        } else if ($(this).hasClass('gallery-button')) {
            sliderVisible = true;
            fadeInToMain('.gallery');  
        } else if ($(this).hasClass('daily-menu-button')) {
            sliderVisible = false;
            fadeInToMain('.daily-menu');
        } else if ($(this).hasClass('contact-button')) {
            sliderVisible = false;
            fadeInToMain('.contact');
            initMap();
        }
        $(this).addClass('active');
    })

    fadeInToMain('.banner');

    $('table a').click(function() {
        var current = $(this);
        var target = $(current).attr('href');
        $('table tbody').each(function() {
            $(this).hide();
        });
        $(target).fadeIn();
        $('table a').each(function() {
            $(this).removeClass('active');
        });
        $(current).addClass('active');
    })

    width = $('.slider').outerWidth();
    count = $('.slider li').length;

    $('.slider li').each(function(index) {
        var img = $(this).children();
        var imgSrc = img.attr('src');
        img.hide();
        $(this).css({
            'background': "url('" + imgSrc + "') center/cover no-repeat",
            'position': 'absolute',
            'left': index * width
        })
    });

    
})

function fadeInToMain(element) {
    $('main').html($(element).clone().fadeIn(1200));
    if (sliderVisible) {
        startLoop();
    } else {
        stopLoop();
    }
}

function stopLoop() {
    window.clearInterval(loop);
}

var loop;
function startLoop() {
    if (sliderVisible) {
        loop = setInterval( function() {
            $('ul li').delay('2500').animate({ left: '-=' + width + 'px' }, 2500, 'easeInOutQuint');
            position++;
            if (position >= (count - 1)) {
                position = 0;
                stopLoop();
                $('ul li').animate({ left: '+=' + (count-1) * width + 'px' }, 1000, 'easeInOutQuint');
                startLoop();
            }
        }, 3000);
    }
}



/*
    $( document ).ready(function() {
        // Handler for .ready() called.
    });

    is equivalent to
    $(function() {
        // Handler for .ready() called.
    });

    (function($){
        //some code
    })(jQuery);

    is an immediately-invoked function expression (IIFE) with the jQuery object as its argument. 
    Its purpose is to restrict the scope of at least the $ variable to its own block so it doesn't cause conflicts.
    You typically see the pattern used by jQuery plugins to ensure that $ == jQuery
*/