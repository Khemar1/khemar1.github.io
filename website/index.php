<?php
	session_start();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="autovehicle.css">

		<title>AutoVehicle</title>
	</head>
	<body>
	
		<header>
			
			
			<div id="menu-nav">
				<h2 id="brand">AutoVehicle</h2>
			
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#app">Android App</a>
					</li>
					<li>
						<a href="https://github.com/Khemar1/khemar1.github.io/blob/master/README.pdf">Step by Step</a>
					</li>
					<li id="dev">
						<a href="#developers">Developers</a>	
					</li>
					<li>
						<a href="contactus.php">Contact us</a>
					</li>
				</ul>
		
			</div>
			
			<div id="login">
				<a href="">login</a>
				<div class="clear"></div>
				
				
				<?php echo	"
				<ul id='login-menu'>
				<form id='login-form' action='include/signin.inc.php' method='post' accept-charset='utf-8'>
						<li>
							<input id='uname' placeholder='Username' name='username' value='' autocomplete='on' type='text'>					
						</li>
						<li>							
								<input id='pwd' placeholder='Password' name='password' value='' autocomplete='on' type='password'>
						</li>	
					<li id='message' class='login-fail'>
					"; ?>
					
					
						
				<?php echo	"
					</li>
				  
					<li>
							<button id='login-btn' type='submit' value='Login'>Login</button>
						</li>
						</form><br>
						<div class='clear'></div>
						<li>
						
							<a href='signup.php'>Signup</a>
						
						</li>
				</ul>";	
				?>
				
				
				
				
			</div>
		</header>
		
		
		<div id="page">
			<div id="about">
				<h2>ABOUT</h2>
				<p>
					There are numerous areas such as: mines and sewer systems which are beyond the reach of humans.
					These areas may either be too rigid or have entrances that may be too small for an average sized 
					person to reach. This report describes the process followed for the design and utilization of an 
					autonomous vehicle with the ability to map areas that may represent an inconvenience for humans to enter. 
					The autonomous vehicle in question will be fully autonomous and will use ultrasonic sensors to navigate
					and record coordinates in an area which will be sent to a database. This database can then be retrieved 
					by website to display them to specific users when they log in. The mobile application will retrieve the 
					coordinates from the database in addition to a drawn map of the area which it will be able to display to the user.
					The application will also be able to remotely control the car through the usage of an onscreen joystick, through a 
					Bluetooth or WiFi connection. The information presented will be centered on the design of the autonomous vehicle 
					in addition to the mapping algorithm which it will implement.
				</p>
			</div>
		
			<br>
			
			<div id="developers">
			<section id="bil" align="middle">
				<h2>DEVELOPERS</h2>
				<br>
				<img class="img-circle" align="middle" alt="bill" src="images/bil.jpg" />
				<h3>Bilal Alfnous</h3>
				<p>
					A website will be developed to allow the user can login to his account.
					Each specific user will be able to see their previous data been collected using 
					the AutoVehicle. One section of the web site will have a small biography for 
					the developers of the project and their contributions. 
					Another page will contain a step by step a copy of this technical report.
					In addition to those, a section will be added to allow visitors give us 
					feedback and suggestions on how we may improve the project.
				</p>
				
			</section>
			<br>
			<section id="khemar">
				<img  src='images/khemar.jpg' class="img-circle" align="middle" alt="khemar" />
				<h3> Khemar Bryan</h3>
				<p>
					The AutoVehicle Application is used to communicate with the autonomous vehicle remotely.
					It has in total 13 java classes which includes 6 activities. The functions of the activities 
					are as follows: Login Activity is the first page the user will see when they open the application,
					it is where the user enters their information to get their user specific information which is 
					stored in the database; MenuActivity is the page the user sees after they successfully login, 
					they can now choose whether they want to control the car or retrieve a map; The register activity
					is where new users sign up with their information to be stored in the database. After registering 
					users will be taken back to the login page; The first remote control activity has a joystick which 
					the user can use to control the car over an internet connection; The remote control(BT) activity
					is similar to the first remote control activity except it allows the user to control the can over 
					a bluetooth connection; the settings activity is where the user can enter the ip address of their 
					car so that they can connect to it; the mapping activity is where the user can see tell the car 
					to start mapping and retrieve the map that their car has made. The application will work in 
					unison with both the database and hardware to be fully functional. In addition to these various
					features, the application also has support for both English and French.
				</p>
				
			</section>
			<br>
			<section id="jan">
				<img src="images/jan.png" class="img-circle" align="middle" alt="jan" />
				<h3>Jan Yalda</h3>
				<p>
					The Auto Vehicle’s chassis has all the hardware connected or mounted on it that operates
					together to achieve the functionalities that are required from it. The most important piece 
					of hardware is the Raspberry PI 3, the microcomputer which has all the other hardware connected to it. 
					This is where it receives data from and send data t. It also makes it possible to connect to the mobile
					application through a WiFi or Bluetooth connection. The hardware that communicates with the 
					microcomputer are the Ultrasonic Sensors which are distance sensors, they are used to detect 
					objects that may appear in front of the vehicle then send a signal to the microcomputer where 
					it process it then manipulates the actuators according to the data that it received, 
					the actuators are DC Motors used to move the vehicle, but before that the microcomputer actually
					sends data to the H-Bridge the driver which based on the data controls the DC Motors direction.
				</p>
				
			</section>
		</div>
		<br>
		
		</div>
		
		<footer id="footer_1">
		
			<ul>
				<li id="li"><a href="https://github.com/Khemar1/AutonomousVehicle">Android App Github</a></li>
				<li><a href="https://github.com/Khemar1/khemar1.github.io">AutoVehicle Github</a></li>
			</ul>
		
			<p><span id="copyleft">&copy;</span>2017 Bilal Alfnous Production.</p>
		</footer>
		
	</body>
</html>
