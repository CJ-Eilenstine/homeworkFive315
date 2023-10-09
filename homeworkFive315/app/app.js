import * as Model from "../model/model.js"

function initURLListener() {
$(window).on('hashchange', Model.changeRoute);
Model.changeRoute();
}

$(document).ready(function () {
initURLListener();
});

$('.menu-toggle').click(function(){
    $('.nav').toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});