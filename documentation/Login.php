<?php
    $con = mysqli_connect("Host", "Username", "Password", "Database Name");
    
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $statement = mysqli_prepare($con, "SELECT * FROM user WHERE username = ? AND password = ?");
    $hasedpass = md5($password);
    mysqli_stmt_bind_param($statement, "si",$username, $hasedpass);
    mysqli_stmt_execute($statement);
    
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $userID, $name, $username, $hasedpass);
    
    $response = array();
    $response["success"] = false;  
    
    while(mysqli_stmt_fetch($statement)){
        $response["success"] = true;  
        $response["name"] = $name;
        $response["user_name"] = $username;
        $response["password"] = $hasedpass;
   }
    
    echo json_encode($response);
?>