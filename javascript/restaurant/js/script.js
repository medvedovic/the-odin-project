var opened = false;

$(document).ready(function() {
    $(".menu-button").click(function() {
        if ($(this).hasClass('home-button')) {
            createViewPort($("#banner"));
            //$('#viewport').html($('#banner').html());
            navigationClickHandler(this);
            closeMenu();
        }
        else if ($(this).hasClass('gallery-button')) {
            createViewPort($("#gallery"));
            //$('#viewport').html($('#gallery').html());
            navigationClickHandler(this);
            closeMenu();
        }
        else if ($(this).hasClass('menu-btn')) {
            createViewPort($("#menu"));
            //$('#viewport').html($('#menu').html());
            navigationClickHandler(this);
            closeMenu();
        }
        else if ($(this).hasClass('contact-button')) {
            createViewPort($("#contact"));
            //$('#viewport').html($('#contact').html());
            navigationClickHandler(this);
            closeMenu();
        }
    })

    $('nav i').click(function(){
        $('.nested').slideToggle('slow');
    })

    $('nav ul li ul li a').click(function(){
        $('.nested').slideToggle('slow');
        closeMenu();
    })

    $('#main-menu-btn').click(function(){
        if (opened) {
            closeMenu();
        } else {
            $('#main-menu-btn').toggleClass('active');
            $('nav, #main-menu-btn').animate({left: '+=200px'});
            opened = true;
        }
    });

    var num = $('.gallery article').length;
    var show = 3;
    var count = 0;

    var articles = $('.gallery article');


    for (var i = 0; i < show; i++) {
        $(articles[i]).css('display', 'inline-block');
    }
})

function navigationClickHandler(item) {
    $('nav ul li a').each(function() {
        $(this).removeClass('active');
    });
    $(item).addClass('active');
}

function createViewPort(item) {
    var element = $(item).clone();
    $('main').each(function() {
        $(this).removeClass('stretch');
        $(this).addClass('hide');
    })
    element.children().first().addClass('stretch').removeClass('hide');
    $('#viewport').css('display','flex');
    $('#viewport').html(element.html());
    window.scrollTo(0,0);
}

function closeMenu() {
    $('#main-menu-btn').toggleClass('active');
    $('nav, #main-menu-btn').animate({left: '-=200px'})
    opened = false;
}