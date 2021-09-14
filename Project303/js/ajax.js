$(function() {


  $('#form-price-stand').submit(function(){
      $.post(
          'card_ajax_form.php', // адрес обработчика
           $("#form-price-stand").serialize(), // отправляемые данные

          // function(msg) { // получен ответ сервера
           
          // }
      );
      return false;
  });

});
