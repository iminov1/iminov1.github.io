$(function(){
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
    
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });

    $('.slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
	    {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 3,
	      }
	    }
    ]
    });
});