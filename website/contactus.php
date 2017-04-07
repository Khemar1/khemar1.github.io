<?php
	session_start();
	$errors = isset($_SESSION['errors']) ? $_SESSION['errors']: [];
	$errors = isset($_SESSION['fields']) ? $_SESSION['fields']: [];
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="autovehicle.css">
		<link rel="stylesheet" type="text/css" href="contactus.css">
		<title>AutoVehicle</title>
	</head>
	<body>
	
		<header>
			<div id="menu-nav">
				<h2 id="brand"><a href="index.php">AutoVehicle</a></h2>
			</div>

		</header>		
	
	
<div class="container">
  <form action="feedback.php" method="post">
    <label for="fname">Name</label>
    <input type="text" id="fname" name="fname" <?php echo isset($fields['fname']) ? 'placeholder="' . $fields['fname'] . '"' : 'Your Name..' ?>>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" <?php echo isset($fields['email']) ? 'value="' . $fields['email'] . '"' : 'Your Email..' ?>>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" <?php echo isset($fields['sunject']) ? 'value="' . $fields['subject'] . '"' : 'Write a Feedback..' ?> style="height:200px"></textarea>
    <input type="submit" value="Submit">
	
	<?php if(!empty($errors)): ?>
		<div id="errors">
		<ul><li><?php echo implode('</li><li>', $errors); ?></li></ul>
		</div>
	<?php endif; ?>
	
  </form>
</div>
	
		<div class="clear"></div>
	
		<footer id="footer_1">
			<p><span id="copyleft">&copy;</span> 2017 Bilal Alfnous Production.</p>
		</footer>
	</body>
</html>
<?php
unset($_SESSION['errors']);
unset($_SESSION['fields']);
?>