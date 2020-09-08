$(function() {

//bxSlider
	$(function(){
		$('.bxslider').bxSlider({
     auto: true,
     mode: 'fade',
     captions: true,
     infiniteLoop: true,
     controls:false,
     pause:4000,
 		speed:800
   });
	});


$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
  });
});

	});
