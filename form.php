	<!DOCTYPE html>
	<html>
	<head>
		<title>Form</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<!-- <script type="text/javascript" src="jqueryScripts.js"></script> -->
		<script type="text/javascript" src="ajax.js"></script>
	</head> 
	<body>
		<div align="center" id="main">

			<?php 
			if (isset($_GET['error']) && !empty($_GET['error'])) {
				echo "<h3 style='color:red'>Your email id is already registered<h3>";
			}
			?>



			<form action="save_data.php" method="post" name="myForm" id="myForm" >
				First Name :<br> <input type="text" name="fname" id="fname"/><span id="fnamestatus"></span><br><br>
				Last Name : <br><input type="text" name="lname" id="lname"/><span id="lnamestatus"></span><br><br><br>
				Email ID :<br> <input type="text" name="email" id="email"/><span id="emailstatus"></span><span id="checkingbar"></span><br><br><br>
				Gender : <br><input type="radio" name="gender" value="Male" id="male" />Male
				<input type="radio" name="gender" value="Female" id="female" />Female
				<span id="malestatus"></span><span id="femalestatus"></span><span id="genderstatus"></span><br><br>
				
				Dates :<br>
				<label for="year_start">Year :</label> 
				<select id="year" name="year"> 
					<option value="blank"></option>
					<option value="1990">1990</option>       
					<option value="1991">1991</option>       
					<option value="1992">1992</option>       
					<option value="1993">1993</option>       
					<option value="1994">1994</option>       
					<option value="1995">1995</option>       
					<option value="1996">1996</option>       
					<option value="1997">1997</option>       
					<option value="1998">1998</option>       
					<option value="1999">1999</option>
					<option value="2000">2000</option>       
				</select>


				
				<label for="month_start">Month :</label> 
				<select id="month" name="month"> 
					<option value="blank"></option>
					<option value="01">01</option>       
					<option value="02">02</option>       
					<option value="03">03</option>       
					<option value="04">04</option>       
					<option value="05">05</option>       
					<option value="06">06</option>       
					<option value="07">07</option>       
					<option value="08">08</option>       
					<option value="09">09</option>       
					<option value="10">10</option>       
					<option value="11">11</option>       
					<option value="12">12</option>   
				</select> 


				
				<label for="day_start">Day :</label> 
				<select id="date" name="date"> 
					<option value="blank"></option>
					<option value="01">01</option>       
					<option value="02">02</option>       
					<option value="03">03</option>       
					<option value="04">04</option>       
					<option value="05">05</option>       
					<option value="06">06</option>       
					<option value="07">07</option>       
					<option value="08">08</option>       
					<option value="09">09</option>       
					<option value="10">10</option>       
					<option value="11">11</option>       
					<option value="12">12</option>       
					<option value="13">13</option>       
					<option value="14">14</option>       
					<option value="15">15</option>       
					<option value="16">16</option>       
					<option value="17">17</option>       
					<option value="18">18</option>       
					<option value="19">19</option>       
					<option value="20">20</option>       
					<option value="21">21</option>       
					<option value="22">22</option>       
					<option value="23">23</option>       
					<option value="24">24</option>       
					<option value="25">25</option>       
					<option value="26">26</option>       
					<option value="27">27</option>       
					<option value="28">28</option>       
					<option value="29">29</option>       
					<option value="30">30</option>       
					<option value="31">31</option>       
				</select>&nbsp;&nbsp;<span id="dobstatus"></span> <br>
				<span id="yearstatus"></span>
				<span id="monthstatus"></span>
				<span id="datestatus"></span>
				<br><br>
				City : <br><input type="text" name="city" id="city"/><span id="citystatus"></span><br><br><br>
				Phone no : <br><input type="text" name="phone" size="10" id="phone"/><span id="phonestatus"></span><br><br><br>
				Pin code : <br><input type="text" name="pin" size="6" id="pin"/><span id="pinstatus"></span><br><br><br><br>
				<button id='fillerr'></button><br>
				<input type="submit" value="Submit data to database" id="submit" />

			</form>
			<a href="show_data.php"><input type="submit" value="Show stored data"></a> 
		</div>
		
	</body>
	</html>