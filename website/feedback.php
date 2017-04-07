<?php

session_start();
require_once 'phpmailer/PHPMailerAutoload.php';

$errors = array();

if(isset($_POST['fname'], $_POST['email'], $_POST['subject'])) {
	$fields = [
		'fname' => $_POST['fname'],
		'email' => $_POST['email'],
		'subject' => $_POST['subject']
	];
	
	foreach($fields as $field => $data){
		if(empty($data)){
			$errors[] = 'The '. $field . ' field is required.';
		}
	}
	
	if(empty($errors)){
		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->SMTPAuth = true;
				
		$mail->Host = 'smtp.live.com';
		$mail->Username = 'ivysaur17@hotmail.com';
		$mail->password = 'AutoJbk17';
		$mail->SMTPSecure = 'tls';
		$mail->port = 25;

		$mail->isHTML();
		
		$mail->Subject = 'AutoVehicle Feedback';
		$mail->Body ='From: '. $fields['fname'] . ' (' . $fields['email'] . ')<p>' . $fields['subject']. '</p>';
		$mail->FromName = 'Contact';	
		$mail->AddAddress('ivysaur17@hotmail.com', 'Bill Alfonso');
		$mail->send();
	}
	
}else{
	$errors[] = 'screwed!!';
}

$_SESSION['errors'] = $errors;
header('Location: index.php');

?>
