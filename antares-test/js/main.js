$(function() {

  $('.menu__item').click(function() {
    $('#menu__toggle').prop('checked', false);
  });


// anchorScroll
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    $('html, body').animate({scrollTop: dn}, 1000);

  });
//BxSlider
// projects
  $('.bxslider1').bxSlider({
    mode: 'fade',
    captions: false,
    touchEnabled: false,
    oneToOneTouch: false,
    speed: 1000,
  });


  $('.bxslider1-mob').bxSlider({
    mode: 'fade',
    captions: false,
    speed: 1000,
  });

  $('.stages-mob-land').bxSlider({
    mode: 'fade',
    captions: false,
    speed: 1000,
  });

  // homepage
  $('.bxslider2').bxSlider({
    mode: 'fade',
    captions: false,
    speed: 1000,
  });





//mousemove

$(document).mousemove(function (e) {
        $('.elephant').css({
            marginRight: e.pageX / 100 + 5,
            marginTop: -e.pageY / 100 + 5,
        })
      })

	  $(document).mousemove(function (e) {
        $('.face').css({
            marginRight: e.pageX / 100 + 5,
            marginTop: -e.pageY / 100 + 5,
        })
      })


$(document).on('mousemove', function (e) {
        $('.imgbox').css({
            marginRight: e.pageX / 100 +5,
            marginTop: -e.pageY / 100 +5,
        })
    });



//scroll animation




  $(window).scroll(function() {
    if ($(this).scrollTop() > 10){
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });


  $(window).scroll(function () {
  		$(".a_right").each(function () {
  			var elPos = $(this).offset().top;
  			var topOfWindow	=	$(window).scrollTop();
  			if (elPos < topOfWindow + 500) {
  				$(this).addClass("fadeInRight");
  			}
  		});
  	});


    $(window).scroll(function () {
    		$(".a_left").each(function () {
    			var elPos = $(this).offset().top;
    			var topOfWindow	=	$(window).scrollTop();
    			if (elPos < topOfWindow + 500) {
    				$(this).addClass("fadeInLeft");
    			}
    		});
    	});


      $(window).scroll(function () {
      		$(".a_up").each(function () {
      			var elPos = $(this).offset().top;
      			var topOfWindow	=	$(window).scrollTop();
      			if (elPos < topOfWindow + 500) {
      				$(this).addClass("fadeInUp");
      			}
      		});
      	});



// show more


$('#show-more').click(function() {
  $('#more').fadeIn();
  $(this).fadeOut(0);
});

$('#show-moreVip').click(function() {
  $('#moreVip').fadeIn();
  $(this).fadeOut(0);
});



//////


$('#show-more-mob').click(function() {
  $('#more-mob').fadeIn();
  $(this).fadeOut(0);
});

$('#show-moreVip-mob').click(function() {
  $('#moreVip-mob').fadeIn();
  $(this).fadeOut(0);
});
});
//





// PopUp
//popUp check form
function checkParams() {
    var name = $('#name').val();
    var email = $('#mail').val();
    var phone = $('#phone').val();

    if(name.length != 0 && email.length != 0 && phone.length != 0) {
        $('#check1').removeAttr('disabled');
    } else {
        $('#check1').attr('disabled', 'disabled');
    }
}

$(document).ready(function() {
    $('#check1').change(function() {
      if ($(this).is(':checked'))
          $('#submit').removeAttr('disabled');
      else
          $('#submit').attr('disabled', 'disabled');
    });
});


function showPopup() {
  $('#popup1').addClass("none");
	$(".b-popup").fadeIn(200); // Медленно выводим изображение
}

// callForm
$(document).ready(function() {
  $('#callButton').click(function() {

    $('#callFormBox').addClass("none");
    $(".callFormBox").fadeIn(200);
  })
});


/////// form-price-stand


function checkParamspricestand() {
    var name = $('#name-price-stand').val();
    var email = $('#mail-price-stand').val();
    var phone = $('#phone-price-stand').val();

    if(name.length != 0 && email.length != 0 && phone.length != 0) {
        $('#check-price-stand').removeAttr('disabled');
    } else {
        $('#check-price-stand').attr('disabled', 'disabled');
    }
}

$(document).ready(function() {
    $('#check-price-stand').change(function() {
      if ($(this).is(':checked'))
          $('#submit-price-stand').removeAttr('disabled');
      else
          $('#submit-price-stand').attr('disabled', 'disabled');
    });
});





////// form-price-premium


function checkParamspricepremium() {
    var name = $('#name-price-premium').val();
    var email = $('#mail-price-premium').val();
    var phone = $('#phone-price-premium').val();

    if(name.length != 0 && email.length != 0 && phone.length != 0) {
        $('#check-price-premium').removeAttr('disabled');
    } else {
        $('#check-price-premium').attr('disabled', 'disabled');
    }
}

$(document).ready(function() {
    $('#check-price-premium').change(function() {
      if ($(this).is(':checked'))
          $('#submit-price-premium').removeAttr('disabled');
      else
          $('#submit-price-premium').attr('disabled', 'disabled');
    });
});


$(document).ready(function() {
  $('#stand').click(function() {
    $('#popup-price-stand').addClass("none");
    $("#popup-price-stand").fadeIn(200);
    console.log("showPopuppriceformstand");
  });
});
$(document).ready(function() {
  $('#premium').click(function() {
    $('#popup-price-premium').addClass("none");
    $("#popup-price-premium").fadeIn(200);
    console.log("showPopuppriceformpremium");
  });
});
$(document).ready(function() {
  $('#VIP').click(function() {
    $('#popup-price-VIP').addClass("none");
    $("#popup-price-VIP").fadeIn(200);
    console.log("showPopuppriceformVIP");
  });
});


$(document).ready(function() {
  $('#stand-mob').click(function() {
    $('#popup-price-stand').addClass("none");
    $("#popup-price-stand").fadeIn(200);
    console.log("showPopuppriceformstand");
  });
});
$(document).ready(function() {
  $('#premium-mob').click(function() {
    $('#popup-price-premium').addClass("none");
    $("#popup-price-premium").fadeIn(200);
    console.log("showPopuppriceformpremium");
  });
});
$(document).ready(function() {
  $('#VIP-mob').click(function() {
    $('#popup-price-VIP').addClass("none");
    $("#popup-price-VIP").fadeIn(200);
    console.log("showPopuppriceformVIP");
  });
});
////// form-price-VIP


function checkParamspriceVIP() {
    var name = $('#name-price-VIP').val();
    var email = $('#mail-price-VIP').val();
    var phone = $('#phone-price-VIP').val();

    if(name.length != 0 && email.length != 0 && phone.length != 0) {
        $('#check-price-VIP').removeAttr('disabled');
    } else {
        $('#check-price-VIP').attr('disabled', 'disabled');
    }
}

$(document).ready(function() {
    $('#check-price-VIP').change(function() {
      if ($(this).is(':checked'))
          $('#submit-price-VIP').removeAttr('disabled');
      else
          $('#submit-price-VIP').attr('disabled', 'disabled');
    });
});
//





function PopUpHide(){
    $("#popup1").fadeOut(500); //function which will hide PopUp
    $("#popup-price-VIP").fadeOut(500);
    $("#popup-price-stand").fadeOut(500);
    $("#popup-price-premium").fadeOut(500);
    $("#callFormBox").fadeOut(500);
}

// THANKS popUp
//   $(document).ready(function() { // Ждём загрузки страницы
//   	$("#submit").click(function showPopup2() {
//       $('#popup2').addClass("none2");
//       	$(".b-popup").fadeOut(0);
//     	$(".a-popup").fadeIn(0); // Медленно выводим изображение
//     });
// });






function PopUpHide2(){
    $("#popup2").fadeOut(500);
    $("#popup1").fadeOut(500);
    $("#popup-price-stand").fadeOut(500);
    $("#popup-price-premium").fadeOut(500);
    $("#popup-price-VIP").fadeOut(500);//function which will hide PopUp
    $("#callFormBox").fadeOut(500);
}



//////



function ValidPhone() {
  var re = /^[[\d\+][\d\(\)\ -]{8,15}\d$/;
  var myPhone = document.getElementById('phone-callForm').value;
  var valid = re.test(myPhone);
  if (valid){
    $('#submit-callForm').removeAttr('disabled');
    output = ' ';
  }
  else {
    $('#submit-callForm').attr('disabled', 'disabled');
    output = 'Номер телефона введен неправильно!';
  }
  document.getElementById('messagePhone').innerHTML = output;
  return valid;
};
