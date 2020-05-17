$(function() {
    'use strict';
    $('.content-area').width($(window).width() - $('.sidebar').width() - 25);
    $(window).resize(function() {
        $('.content-area').width($(window).width() - $('.sidebar').width() - 25);

    });
    $(".toggle-sidebar").on("click", () => {
        $('.content-area , .sidebar').toggleClass('no-sidebar')
    });
    $('.toggle-submenu').on("click", function() {
        $(this).toggleClass('fa-angle-right fa-angle-down ');
        $(this).parent('a').next('.child-links').slideToggle()
    });
});