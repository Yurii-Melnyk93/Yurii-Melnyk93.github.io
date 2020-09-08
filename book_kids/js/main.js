$(function() {
  //callForm
  $(document).ready(function() {
    $('#callButton').click(function() {

      $('#callFormBox').addClass("none");
      $(".callFormBox").fadeIn(200);
    })
  });






  // language
  $('.active').click(function() {
    $('.langLi').show();
  });
  $('.langLi').click(function () {
    $('.langLi').removeClass('active');
    $(this).addClass('active');
  });

// mobNav
$('.menu__item').click(function() {
    $('#menu__toggle').prop('checked', false);
  });
// slider
  $('.gallerySlider').bxSlider({
      mode: 'fade',
      captions: false,
      speed: 1000,
    });


// anchorScroll
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    $('html, body').animate({scrollTop: dn}, 1000);

  });



  // popUp
  $(document).ready(function() {
  $('#g1').click(function() {
    $('#popup1').addClass("none");
    $("#popup1").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g2').click(function() {
    $('#popup2').addClass("none");
    $("#popup2").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g3').click(function() {
    $('#popup3').addClass("none");
    $("#popup3").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g4').click(function() {
    $('#popup4').addClass("none");
    $("#popup4").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g5').click(function() {
    $('#popup5').addClass("none");
    $("#popup5").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g6').click(function() {
    $('#popup6').addClass("none");
    $("#popup6").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g7').click(function() {
    $('#popup7').addClass("none");
    $("#popup7").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g8').click(function() {
    $('#popup8').addClass("none");
    $("#popup8").fadeIn(500);
    });
  });
  $(document).ready(function() {
  $('#g9').click(function() {
    $('#popup9').addClass("none");
    $("#popup9").fadeIn(500);
    });
  });
// mobPopUap
$(document).ready(function() {
$('#gm1').click(function() {
  $('#popup1').addClass("none");
  $("#popup1").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm2').click(function() {
  $('#popup2').addClass("none");
  $("#popup2").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm3').click(function() {
  $('#popup3').addClass("none");
  $("#popup3").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm4').click(function() {
  $('#popup4').addClass("none");
  $("#popup4").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm5').click(function() {
  $('#popup5').addClass("none");
  $("#popup5").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm6').click(function() {
  $('#popup6').addClass("none");
  $("#popup6").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm7').click(function() {
  $('#popup7').addClass("none");
  $("#popup7").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm8').click(function() {
  $('#popup8').addClass("none");
  $("#popup8").fadeIn(500);
  });
});
$(document).ready(function() {
$('#gm9').click(function() {
  $('#popup9').addClass("none");
  $("#popup9").fadeIn(500);
  });
});

$(document).ready(function() {
$('#hide1').click(function() {
  $('#popup1').removeClass("none");
});
});
$(document).ready(function() {
$('#hide2').click(function() {
  $('#popup2').removeClass("none");
});
});
$(document).ready(function() {
$('#hide3').click(function() {
  $('#popup3').removeClass("none");
});
});
$(document).ready(function() {
$('#hide4').click(function() {
  $('#popup4').removeClass("none");
});
});
$(document).ready(function() {
$('#hide5').click(function() {
  $('#popup5').removeClass("none");
});
});
$(document).ready(function() {
$('#hide6').click(function() {
  $('#popup6').removeClass("none");
});
});
$(document).ready(function() {
$('#hide7').click(function() {
  $('#popup7').removeClass("none");
});
});
$(document).ready(function() {
$('#hide8').click(function() {
  $('#popup8').removeClass("none");
});
});
$(document).ready(function() {
$('#hide9').click(function() {
  $('#popup9').removeClass("none");
});
});



// form
  // $(document).ready(function() {
  //   $('#step1').click(function() {
  //     $('#firstStep').hide(1000);
  //     $('#secondStep').show(1000);

  //   });
  // });

  // $(document).ready(function() {
  //   $('#back1').click(function() {
  //     $('#secondStep').hide(1000);
  //     $('#firstStep').show(1000);
  //   });
  // });

  // $(document).ready(function() {
  //   $('#step2').click(function() {
  //     $('#secondStep').hide(1000);
  //     $('#lastStep').show(1000);
  //   });
  // });

  // $(document).ready(function() {
  //   $('#back2').click(function() {
  //     $('#lastStep').hide(1000);
  //     $('#secondStep').show(1000);
  //   });
  // });



});
// formChek
function checkParams1() {
  var name = $('#name').val();
  var email = $('#mail').val();
  var phone = $('#phone').val();
  var adress = $('#adress').val();



  // if(name.length != 0 && email.length != 0 && phone.length != 0 && adress.length != 0) {
  //   $('#submit').removeAttr('disabled');
  //
  // } else {
  //   $('#submit').attr('disabled', 'disabled');
  //
  // }
};
// function checkParams2() {
//   var childName = $('#childName').val();
//   var bookName = $('#bookName').val();
//   var childAge = $('#childAge').val();
//   var bornData = $('#bornData').val();
//   var childAdress = $('#childAdress').val();
//   var momName = $('#momName').val();
//   var dadName = $('#dadName').val();


//   if(childName.length != 0 && bookName.length != 0 && childAge.length != 0 && bornData.length != 0 && childAdress.length != 0 && momName.length != 0 && dadName.length != 0) {
//     $('#step2').removeAttr('disabled');

//   } else {
//     $('#step2').attr('disabled', 'disabled');

//   }
// };

function ValidMailRu() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('mail').value;
    var valid = re.test(myMail);
    if (valid){
      $('#submit').removeAttr('disabled');
      output = ' ';
    }
    else {
      $('#submit').attr('disabled', 'disabled');
      output = 'Адрес электронной почты введен неправильно!';
    }
    document.getElementById('messageMail').innerHTML = output;
    return valid;
};

function ValidPhoneRu() {
    var re = /^[[\d\+][\d\(\)\ -]{8,15}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid){

       output = ' ';
    }
    else {

      output = 'Номер телефона введен неправильно!';
    }
    document.getElementById('messagePhone').innerHTML = output;
    return valid;
};

function ValidMailUa() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('mail').value;
    var valid = re.test(myMail);
    if (valid) {
        $('#submit').removeAttr('disabled');
      output = ' ';
    }
    else {
      $('#submit').attr('disabled', 'disabled');
       output = 'Адреса електронної пошти введена невірно!';
    }
    document.getElementById('messageMail').innerHTML = output;
    return valid;
};

function ValidPhoneUa() {
    var re = /^[[\d\+][\d\(\)\ -]{8,15}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid){

      output = ' ';
    }
    else {

       output = 'Номер телефону введений невірно';
    }
    document.getElementById('messagePhone').innerHTML = output;
    return valid;
};


function callPhoneRu() {
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
    document.getElementById('callMessageUa').innerHTML = output;
    return valid;
};

function callPhoneUa() {
    var re = /^[[\d\+][\d\(\)\ -]{8,15}\d$/;
    var myPhone = document.getElementById('phone-callForm').value;
    var valid = re.test(myPhone);
    if (valid){
      $('#submit-callForm').removeAttr('disabled');
      output = ' ';
    }
    else {
      $('#submit-callForm').attr('disabled', 'disabled');
      output = 'Номер телефону введено невірно!';
    }
    document.getElementById('callMessageUa').innerHTML = output;
    return valid;
};


function PopUpHide(){

    $("#callFormBox").fadeOut(500);
}
function PopUpHide2(){

    $("#callFormBox").fadeOut(500);
}
