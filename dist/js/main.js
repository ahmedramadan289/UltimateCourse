$(function() {
    'use strict';
    $('.content-area').width($(window).width() - $('.sidebar').width() - 33);
    $(window).resize(function() {
        $('.content-area').width($(window).width() - $('.sidebar').width() - 33);

    });
    $(".toggle-sidebar").on("click", () => {
        $('.content-area , .sidebar').toggleClass('no-sidebar')
    });
});