<?php

$fio = $_POST['fio'];
$email = $_POST['mail'];
$phone = $_POST['phone'];
$adress = $_POST['adress'];
$lang = $_POST['lang'];
$childName = $_POST['childName'];
$bookName = $_POST['bookName'];
$affectionateName = $_POST['affectionateName'];
$childAge = $_POST['childAge'];
$bornData = $_POST['bornData'];
$childAdress = $_POST['childAdress'];
$momName = $_POST['momName'];
$dadName = $_POST['dadName'];
$brotherName = $_POST['brotherName'];
$sisterName = $_POST['sisterName'];
$grandparentName = $_POST['grandparentName'];
$cousinName = $_POST['cousinName'];
$favoriteToy = $_POST['favoriteToy'];
$favoritePet = $_POST['favoritePet'];
$commemorativeInscription = $_POST['commemorativeInscription'];




// if((isset($_POST['fio'])&&$_POST['fio']!="")
// &&(isset($phone)&&$phone!="")
// &&(isset($email)&&$email!=""))
// { //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'order@svitbook.com.ua'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка с сайта'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$fio.'</p>
                        <p>Email: '.$email.'</p>
                        <p>Телефон: '.$phone.'</p>
                        <p>Адрес доставки: '.$adress.'</p>
                        <p>Язык книги: '.$lang.'</p>
                        <p>Имя ребенка в книге: '.$childName.'</p>
                        <p>Название книги: '.$bookName.'</p>
                        <p>Как вы ласково называете ребенка: '.$affectionateName.'</p>
                        <p>Возраст ребенка: '.$childAge.'</p>
                        <p>Дата рождения: '.$bornData.'</p>
                        <p>Место проживания ребенка: '.$childAdress.'</p>
                        <p>Имя мамы: '.$momName.'</p>
                        <p>Имя папы: '.$dadName.'</p>
                        <p>Имена родных братьев: '.$brotherName.'</p>
                        <p>Имена родных сестричек: '.$sisterName.'</p>
                        <p>Имена бабушек и дедушек: '.$grandparentName.'</p>
                        <p>Двоюродные братья/сестры/лучшие друзья ребенка: '.$cousinName.'</p>
                        <p>Любимая игрушка ребенка: '.$favoriteToy.'</p>
                        <p>Любимый домашний питомец: '.$favoritePet.'</p>
                        <p>Памятная надпись: '.$commemorativeInscription.'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: $email\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
// }

?>
