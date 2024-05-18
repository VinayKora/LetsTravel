<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
    $gender = filter_var($_POST['gender'], FILTER_SANITIZE_STRING);
    $location = filter_var($_POST['location'], FILTER_SANITIZE_STRING);
    $trip = filter_var($_POST['trip'], FILTER_SANITIZE_STRING);
    $queries = filter_var($_POST['queries'], FILTER_SANITIZE_STRING);

    // Prepare email
    $to = 'koravinay123@gmail.com';
    $subject = 'New Trip Inquiry';
    $message = "Name: $name\nPhone: $phone\nAge: $age\nGender: $gender\nLocation: $location\nInterested in: $trip\nQueries: $queries";
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: webmaster@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Attempt to send the email
    if(mail($to, $subject, $message, $headers)) {
        echo "Thank you for your inquiry. We will get back to you soon.";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>
