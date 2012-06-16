$(function(){
    var hover = $('.app-categories__hover');

    $('.app-categories').mousemove(function(e){
        hover.css({left: e.pageX - 53 + 'px', top: e.pageY - 51 + 'px' });
    });;
});