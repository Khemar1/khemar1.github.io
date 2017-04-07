<?php
   
    $con = mysqli_connect("mysql1.000webhost.com", "a9389350_admin", "admin1", "a9389350_users");
    
    $username = $_POST['uname'];
    $password = $_POST['pwd'];
    
	
if(empty($uname)){
	header("Location: ../index.php?error=empty");
	exit();
}
if(empty($pwd)){
	header("Location: ../index.php?error=empty");
	exit();
}
else {
	
    $statement = mysqli_prepare($con, "SELECT user_id, name, username, password FROM user WHERE uname = ? AND pwd = ?");
    $hasedpass = md5($pwd);
    mysqli_stmt_bind_param($statement, "si",$uname, $hasedpass);
    mysqli_stmt_execute($statement);
    
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $userID, $name, $uname, $hasedpass);
    
    $response = array();
    $response["success"] = false;  
    
    while(mysqli_stmt_fetch($statement)){
        $response["success"] = true;  
        $response["name"] = $name;
        $response["user_name"] = $uname;
        $response["password"] = $hasedpass;
        
   }
    
    header("Location: ../user.php");
}
	
?>
