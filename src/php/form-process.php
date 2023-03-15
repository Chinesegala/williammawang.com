<?php
if(isset($_POST['submit'])){
    $to = "youremail@example.com"; // this is your Email address
    $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); // this is the sender's Email address
    $first_name = filter_var($_POST['first_name'], FILTER_SANITIZE_STRING);
    $last_name = filter_var($_POST['last_name'], FILTER_SANITIZE_STRING);
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = filter_var($first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'], FILTER_SANITIZE_STRING);
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    // Check if all required fields are filled out
    if(empty($first_name) || empty($last_name) || empty($from) || empty($message)) {
        echo "Please fill out all required fields.";
        exit;
    }

    // Check if email address is valid
    if(!filter_var($from, FILTER_VALIDATE_EMAIL)) {
        echo "Please enter a valid email address.";
        exit;
    }

    // Check if first name is at least 2 characters long
    if(strlen($first_name) < 2) {
        echo "First name must be at least 2 characters long.";
        exit;
    }

    // Check if first and last name contain only letters and white spaces
    if(!preg_match("/^[a-zA-Z ]*$/",$first_name) || !preg_match("/^[a-zA-Z ]*$/",$last_name)) {
        echo "Only letters and white spaces are allowed in the first and last name fields.";
        exit;
    }

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
}
?>