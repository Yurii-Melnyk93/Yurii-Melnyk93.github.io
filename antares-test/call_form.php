<?php


$phone = $_POST['phoneCall'];


$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);



if((isset($phone)&&$phone!=""))
{ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'office@antares-design.pro'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка на обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Телефон: '.$phone.'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "Перезвоните мне пожалуйста на этот номер\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}

// office@antares-design.pro

// $header = 'Content-type: text/html; charset=utf-8';
// $fio = $_POST['name'];
// $email = $_POST['mail'];
// $fio = htmlspecialchars($fio);
// $email = htmlspecialchars($email);
// $fio = urldecode($fio);
// $email = urldecode($email);
// $fio = trim($fio);
// $email = trim($email);
?>
