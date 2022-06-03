<?php
if(!isset($_POST['submit']))
{
    echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if(empty($name) || empty($surname) || empty($phone) || empty($message)){
    echo "Please fill all fields before continue.";
    exit
}

$email_from = "nikitashin_m@mail.ru";
$email_subject = "Contact me via my web-page";
$email_body = "Name: $name\n" +
                "Surname: $surname\n" +
                "Phone: $phone\n"
                "Message: $message";

$to = "nikitashin_m@mail.ru";
$headers = "From: $email_from \r\n";

mail($to, $email_subject, $email_body, $headers);

echo "Thank you, your e-mail was sent.";
?>