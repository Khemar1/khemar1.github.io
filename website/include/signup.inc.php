<?php

	session_start();


include '../DB.php';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];


if(empty($fname)){
	header("Location: ../signup.php?error=empty");
	exit();
}
if(empty($uname)){
	header("Location: ../signup.php?error=empty");
	exit();
}
if(empty($pwd)){
	header("Location: ../signup.php?error=empty");
	exit();
}
else{	
	$sql = "SELECT username FROM user WHERE username='$uname'";
	$result = mysqli_query($connection, $sql);	

	$unamecheck = mysqli_num_rows($result);
	
	if($unamecheck > 0){
		header("Location: ../signup.php?error=username");
		exit();	
	} else {
                $encrypt_pwd = md5($pwd);
		
		$sql = "INSERT INTO user (name, username, password) VALUES ('$fname', '$uname', '$encrypt_pwd')";
		$result = mysqli_query($connection, $sql);	
		header("Location: ../user.php");
	}
}

?>
