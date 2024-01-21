<?php
// Enable error reporting for debugging (remove or change for production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Basic validation and sanitization
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Validate inputs
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit; // Stop script execution if the email is invalid
    }
    if (empty($name)) {
        echo "Name is required.";
        exit;
    }
    if (empty($message)) {
        echo "Message is required.";
        exit;
    }

    // Recipient email address (replace with your actual email address)
    $to = "atefabdo26399@gmail.com";
    // Email subject and headers
    $subject = "New Message from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "MIME-Version: 1.0" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";

    // Prepare HTML email content
    $emailContent = "<html><body>";
    $emailContent .= "<p><strong>Name:</strong> $name</p>";
    $emailContent .= "<p><strong>Email:</strong> $email</p>";
    $emailContent .= "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";
    $emailContent .= "</body></html>";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error sending the message.";
    }
}
?>
