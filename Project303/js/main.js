$(function() {

       //////////////////
  $("#headForm").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
           e.preventDefault();
            var formData = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                type: "POST", // Метод отправки
                url: "", // Путь до php файла отправителя
                data: formData,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    // alert("Ваше сообщение отправлено!");
                    $('#form').trigger( 'reset' );
                }
            });
            $('#form').trigger( 'reset' );
            return false;
        });   

//////////////////////
	
    //////////////////
  $("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
           e.preventDefault();
            var formData = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                type: "POST", // Метод отправки
                url: "", // Путь до php файла отправителя
                data: formData,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    // alert("Ваше сообщение отправлено!");
                    $('#form').trigger( 'reset' );
                }
            });
            $('#form').trigger( 'reset' );
            return false;
        });   

//////////////////////

	
	
	
});


////////////

function checkParamsHead() {
    var name = $('#headName').val();
    var email = $('#headMail').val();

    if(name.length != 0 && email.length != 0) {
        $('#headSubmit-btn').removeAttr('disabled');
    } else {
        $('#headSubmit-btn').attr('disabled', 'disabled');
    }
}

///////////////
function checkParams() {
    var name = $('#name').val();
    var email = $('#mail').val();

    if(name.length != 0 && email.length != 0) {
        $('#submit-btn').removeAttr('disabled');
    } else {
        $('#submit-btn').attr('disabled', 'disabled');
    }
}