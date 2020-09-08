$(function() {

  $('#submit').click(function(){
    $('#form').submit(function(){
        $.post(
            'send.php', // адрес обработчика
             $("#form").serialize(), // отправляемые данные

        ).done(function() {
          $('#form').trigger( 'reset' );
              window.location = "/thanks.html";
          });
        return false;
    });
  })

  $(document).ready(function() {
      $("input").keydown(function(event){
        if(event.keyCode == 13){
          event.preventDefault();
            return false;
            }
        });
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

  //
  // document.getElementById('form').addEventListener('submit', function(evt){
  //   var http = new XMLHttpRequest(), f = this;
  //   evt.preventDefault();
  //   http.open("POST", "send.php", true);
  //   http.onreadystatechange = function() {
  //     if (http.readyState == 4 && http.status == 200) {
  //       $('#firstStep').show(1000);
  //       $('#secondStep').hide();
  //       $('#lastStep').hide();
  //       $( 'html,body' ).scrollTop()
  //       $('#form').trigger( 'reset' );
  //     }
  //   }
  //   http.onerror = function() {
  //     alert('Извините, данные не были переданы');
  //   }
  //   http.send(new FormData(f));
  // }, false);

  //
  // function(msg) { // получен ответ сервера
  //   $('#popup2').addClass("none2");
  //   $('.a-popup').fadeIn(0);
  //   $("#popup1").fadeOut(500);
  //   $('#headForm').trigger( 'reset' );
  // }

});
