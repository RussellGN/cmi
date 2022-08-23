<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$fullName = $_POST['full-name'];

$recipient = "dudurussell@gmail.com";

if ( ! empty($fullName)) {
	die("spam detected");
} 



$headers = "Reply-To: ".$name." <".$email.">\r\n"; 
$headers .= "From: <cmi-website@cminternational.co.uk>\r\n";  
$headers .= "Organization: CM International\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;

if ( mail($recipient, $subject, $message, $headers) ) {
   echo'
   <!DOCTYPE html>
   <html lang="en">
      <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>CM International - Contact</title>
         <link href="assets/img/favicon.webp" rel="icon" />

         <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"
            rel="stylesheet"
         />

         <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
         />

         <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>

      <body class="text-center lead my-5 container">
         <h2 class="mb-2">Your message was sent!</h2>
         <p>
            We will get back to you as soon as possible. <br />
            <a href="/contact.html" class="btn btn-primary rounded-pill mt-3 px-2"
               ><i class="bi bi-arrow-left-short me-1"></i>Go Back</a
            >
         </p>
      </body>
   </html>
   ';
   } else {
   echo "Failed to send email!";
   }

?>

