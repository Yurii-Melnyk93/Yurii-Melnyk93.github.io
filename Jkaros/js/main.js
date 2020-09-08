$(function() {
	//tabs
	$('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(5);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();

	//slider services
	$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 960
  });
});


$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close,#zxc').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
      $('.burger-box').toggleClass('is-visible');
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      
  });
});
    
    $(function() {
  $('#zxcv').on('click touchstart', function(f) {
    f.preventDefault();
    $('.burger-box').removeClass('is-open');
      $('.burger-box').removeClass('is-visible');
    $('.sliding-panel-content,.sliding-panel-fade-screen').removeClass('is-visible');
      
  });
});




});
