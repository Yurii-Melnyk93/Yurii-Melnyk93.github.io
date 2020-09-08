<?php

$fio = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['mail'];
$rate = $_POST['rate'];

$fio = htmlspecialchars($fio);
$fio = urldecode($fio);
$fio = trim($fio);
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
$rate = htmlspecialchars($rate);
$rate = urldecode($rate);
$rate = trim($rate);


if((isset($_POST['name'])&&$_POST['name']!="")
&&(isset($phone)&&$phone!="")
&&(isset($email)&&$email!=""))
{ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'office@antares-design.pro'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка с сайта'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$fio.'</p>
                        <p>Телефон: '.$phone.'</p>
                        <p>Email: '.$email.'</p>
                        <p>Стоимость пакета услуг: '.$rate.'</p>

                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: $email\r\n"; //Наименование и почта отправителя
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
