$(function() {

  $('#formBrief').submit(function(){
      $.post(
          'brief_action_ajax_form.php', // адрес обработчика
           $("#formBrief").serialize(), // отправляемые данные

          function(msg) { // получен ответ сервера
            $('#popup2').addClass("none2");
            $('.a-popup').fadeIn(0);
            $('#formBrief').trigger( 'reset' );
          }
      );
      return false;
  });



  document.getElementById('headForm').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "head_ajax_form.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $('#popup2').addClass("none2");
        $('.a-popup').fadeIn(0);
        $("#popup1").fadeOut(500);
        $('#headForm').trigger( 'reset' );
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    }
    http.send(new FormData(f));
  }, false);

  $(document).ready( function() {
      $("#fileFF").change(function(){
           var filename = $(this).val().replace(/.*\\/, "");
           $("#fl_nm").html(filename);
      });
  });
  //
  // function(msg) { // получен ответ сервера
  //   $('#popup2').addClass("none2");
  //   $('.a-popup').fadeIn(0);
  //   $("#popup1").fadeOut(500);
  //   $('#headForm').trigger( 'reset' );
  // }

  $('#form-price-stand').submit(function(){
      $.post(
          'card_ajax_form.php', // адрес обработчика
           $("#form-price-stand").serialize(), // отправляемые данные

          function(msg) { // получен ответ сервера
            $('#popup2').addClass("none2");
            $('.a-popup').fadeIn(0);
            $("#popup1").fadeOut(500);
            $('#form-price-stand').trigger( 'reset' );
          }
      );
      return false;
  });

  $('#form-price-premium').submit(function(){
      $.post(
          'card_ajax_form.php', // адрес обработчика
           $("#form-price-premium").serialize(), // отправляемые данные

          function(msg) { // получен ответ сервера
            $('#popup2').addClass("none2");
            $('.a-popup').fadeIn(0);
            $("#popup1").fadeOut(500);
            $('#form-price-premium').trigger( 'reset' );
          }
      );
      return false;
  });

  $('#form-price-VIP').submit(function(){
      $.post(
          'card_ajax_form.php', // адрес обработчика
           $("#form-price-VIP").serialize(), // отправляемые данные

          function(msg) { // получен ответ сервера
            $('#popup2').addClass("none2");
            $('.a-popup').fadeIn(0);
            $("#popup1").fadeOut(500);
            $('#form-price-VIP').trigger( 'reset' );
          }
      );
      return false;
  });

  $('#callForm').submit(function(){
      $.post(
          'call_form.php', // адрес обработчика
           $("#callForm").serialize(), // отправляемые данные

          function(msg) { // получен ответ сервера
            $('#popup2').addClass("none2");
            $('.a-popup').fadeIn(0);
            $("#popup1").fadeOut(500);
            $('#callForm').trigger( 'reset' );
          }
      );
      return false;
  });
});
