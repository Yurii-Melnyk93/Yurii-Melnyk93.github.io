$(function() {
    ////////////////
	 $('.slider').slick({
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  speed: 3000,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
//   responsive: [{
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//       }
//     }
//   ]
});
	////////////////////


	
jQuery(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

$("#scrollNav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 200);
    });
	
});

