<?php
    $con = mysqli_connect("Host", "Username", "Password", "Database Name");
    
    $name = $_POST["name"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $statement = mysqli_prepare($con, "INSERT INTO user (name, username, password) VALUES (?, ?, ?)");
    $hasedpass = md5($password);
    mysqli_stmt_bind_param($statement, "sss", $name, $username, $hasedpass);
    $response = array();
    if(mysqli_stmt_execute($statement)){
        $response["success"] = true;  
    }
    
    
    echo json_encode($response);
?>