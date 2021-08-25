$(function() {

    
	$('body').on('click', '.showBtn', function(){
    if ($('#password').attr('type') == 'password'){
    $(this).addClass('view');
    $('#password').attr('type', 'text');
    } else {
    $(this).removeClass('view');
    $('#password').attr('type', 'password');
    }
    return false;
    });
	
	
	
});