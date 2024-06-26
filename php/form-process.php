<?php

if (!($email = $_POST["email"]?? '')) {
    return;
}

/*
if (!($phonenum = $_POST["phonenum"] ?? '')) {
    return;
}

if(!preg_match("/^\d+$/",$_POST["phonenum"])){
   return;
}*/

$yourname = $_POST["yourname"];
$message = $_POST["message"];
$address = $_POST["address"];
/*$phone = $_POST["phone"];*/

$EmailTo = "edmond@themodernpainting.com";

$Subject = "Modern Painting Group. New Message";

// prepare email body text
$Body = "Your Name: " . $yourname . "\n"
    . "Email address: " . $email . "\n" . "Address: " . $address . "\n" . "Message: " . $message;

// send email
$success = mail($EmailTo, $Subject, $Body , "From:" . $email);

if ($success){
   echo "success";
} else {
    echo "Something went wrong :(";
}
