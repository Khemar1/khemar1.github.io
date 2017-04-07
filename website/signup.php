<?php
	session_start();

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="autovehicle.css">
		<link rel="stylesheet" type="text/css" href="register.css">
		<title>AutoVehicle</title>
	</head>
	<body>

		<header>	
			<div id="menu-nav">
				<h2 id="brand"><a href="index.php">AutoVehicle</a></h2>
			</div>

		</header>		
		
			<?php
	
		if(isset($_SESSION['id'])){
			echo $_SESSION['id'];
		} else {
			echo "you're not logged in!!";
		}
		

		
		
		
	?>
	
	<div id="register">
		<form action="include/signup.inc.php" method="POST">
			<label for="fname">First Name:</label>
			<input type="text" name="fname" placeholder="First Name"><br>
			<label for="lname">Last Name:</label>
			<input type="text" name="lname" placeholder="Last Name"><br>
			<label for="uname">User Name:</label>
			<input type="text" name="uname" placeholder="User Name"><br>
			<label for="pwd">Password:</label>
			<input type="password" name="pwd" placeholder="Password"><br>
			<button type="submit" id="register-btn">Register</button>
		
		</form>
	</div>
	
		<div class="clear"></div>
	
		<footer id="footer_1">
			<p><span id="copyleft">&copy;</span> 2017 Bilal Alfnous Production.</p>
		</footer>
	
	</body>
</html>
