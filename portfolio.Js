var _window = $(window),
    _header = $('.gnav'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.headerlogo').height();
    if(_window.scrollTop() > heroBottom){
        $('.gnav').addClass('fixed'); 
    }
    else{
        $('.gnav').removeClass('fixed');
    }
});
 
_window.trigger('scroll');
