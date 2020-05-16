$(function() {
    'use strict';
    $('.content-area').width($(window).width() - $('.sidebar').width() - 40);
    $(window).resize(function() {
        $('.content-area').width($(window).width() - $('.sidebar').width() - 40);

    });
    $(".toggle-sidebar").on("click", () => {
        $('.content-area , .sidebar').toggleClass('no-sidebar')
    });
});