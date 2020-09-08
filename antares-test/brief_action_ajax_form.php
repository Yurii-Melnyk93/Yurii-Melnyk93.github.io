<?php

$fio = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['mail'];
$company = $_POST['company'];
$services = $_POST['services'];
$cost = $_POST['cost'];
$about = $_POST['about'];



$fio = htmlspecialchars($fio);
$fio = urldecode($fio);
$fio = trim($fio);
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
$company = htmlspecialchars($company);
$company = urldecode($company);
$company = trim($company);
$services = htmlspecialchars($services);
$services = urldecode($services);
$services = trim($services);
$cost = htmlspecialchars($cost);
$cost = urldecode($cost);
$cost = trim($cost);
$about = htmlspecialchars($about);
$about = urldecode($about);
$about = trim($about);

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
                        <p>Название компании: '.$company.'</p>
                        <p>Услуги: '.$services.'</p>
                        <p>Бюджет: '.$cost.'</p>
                        <p>Задача: '.$about.'</p>
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
