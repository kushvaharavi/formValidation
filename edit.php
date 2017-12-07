<?php 
	include("database.php");

	$id = $_GET['id'];
	$sql = "select * from form_data where id=$id";
	$result = $database->query($sql);
    while($row = $result->fetch_assoc())
    {
		$fname = $row['fname'];
        $lname = $row['lname'];
        $email = $row['email'];
        $gender = $row['gender'];
        $dob = $row['dob'];
        $city = $row['city'];
        $phone = $row['phone'];
        $pin = $row['pin'];
    }
    $time  = strtotime($dob);
    $date   = date('d',$time);
    $month = date('m',$time);
    $year  = date('Y',$time);
 ?>
	<!DOCTYPE html>
	<html>
	<head>
		<title>Form</title>
		<link rel="stylesheet" type="text/css" href="styles.css">

	</head>
	<body>
		<div align="center" id="main">
			<h3>FORM</h3>
			<form action="update_data.php?id=<?php echo $id ?>" method="post" name="myForm" onsubmit="return validateForm(); " >
				First Name : <input type="text" name="fname" id="fname" value="<?php echo $fname ?>"/><br>
				Last Name : <input type="text" name="lname" id="lname" value="<?php echo $lname ?>"/><br>
				Email ID : <input type="text" name="email" id="email" value="<?php echo $email ?>"/><br>
				Gender : <input type="radio" name="gender" value="Male" id="male" <?php 
				if($gender == 'Male'){
					echo "checked";
				} ?>
				/>Male
						 <input type="radio" name="gender" value="Female" id="female" <?php 
				if($gender == 'Female'){
					echo "checked";
				} ?>
				 />Female<br><br>
				



				Dates :
				<label for="year_start">Year :</label> 
				<select id="year" name="year" value="<?php echo $year ?>"> 
					<option value="blank"></option>
					<option <?php if ($year == 1990 ) echo 'selected' ; ?>  value="1990">1990</option>       
					<option <?php if ($year == 1991 ) echo 'selected' ; ?>  value="1991">1991</option>       
					<option <?php if ($year == 1992 ) echo 'selected' ; ?>  value="1992">1992</option>       
					<option <?php if ($year == 1993 ) echo 'selected' ; ?>  value="1993">1993</option>       
					<option <?php if ($year == 1994 ) echo 'selected' ; ?>  value="1994">1994</option>       
					<option <?php if ($year == 1995 ) echo 'selected' ; ?>  value="1995">1995</option>       
					<option <?php if ($year == 1996 ) echo 'selected' ; ?>  value="1996">1996</option>       
					<option <?php if ($year == 1997 ) echo 'selected' ; ?>  value="1997">1997</option>       
					<option <?php if ($year == 1998 ) echo 'selected' ; ?>  value="1998">1998</option>       
					<option <?php if ($year == 1999 ) echo 'selected' ; ?>  value="1999">1999</option>
					<option <?php if ($year == 2000 ) echo 'selected' ; ?>  value="2000">2000</option>       
				</select>


				
				<label for="month_start">Month :</label> 
				<select id="month" name="month" value="<?php echo $month ?>"> 
					<option value="blank"></option>
					<option <?php if ($month == 01 ) echo 'selected' ; ?>  value="01">01</option>       
					<option <?php if ($month == 02 ) echo 'selected' ; ?>  value="02">02</option>       
					<option <?php if ($month == 03 ) echo 'selected' ; ?>  value="03">03</option>       
					<option <?php if ($month == 04 ) echo 'selected' ; ?>  value="04">04</option>       
					<option <?php if ($month == 05 ) echo 'selected' ; ?>  value="05">05</option>       
					<option <?php if ($month == 06 ) echo 'selected' ; ?>  value="06">06</option>       
					<option <?php if ($month == 07 ) echo 'selected' ; ?>  value="07">07</option>       
					<option <?php if ($month == 08 ) echo 'selected' ; ?>  value="08">08</option>       
					<option <?php if ($month == 09 ) echo 'selected' ; ?>  value="09">09</option>       
					<option <?php if ($month == 10 ) echo 'selected' ; ?>  value="10">10</option>       
					<option <?php if ($month == 11 ) echo 'selected' ; ?>  value="11">11</option>       
					<option <?php if ($month == 12 ) echo 'selected' ; ?>  value="12">12</option>   
				</select> 


				
				<label for="day_start">Day :</label> 
				<select id="date" name="date" value="<?php echo $date ?>"> 
					<option value="blank"></option>
					<option <?php if ($date == 01 ) echo 'selected' ; ?>  value="01">01</option>       
					<option <?php if ($date == 02 ) echo 'selected' ; ?>  value="02">02</option>       
					<option <?php if ($date == 03 ) echo 'selected' ; ?>  value="03">03</option>       
					<option <?php if ($date == 04 ) echo 'selected' ; ?>  value="04">04</option>       
					<option <?php if ($date == 05 ) echo 'selected' ; ?>  value="05">05</option>       
					<option <?php if ($date == 06 ) echo 'selected' ; ?>  value="06">06</option>       
					<option <?php if ($date == 07 ) echo 'selected' ; ?>  value="07">07</option>       
					<option <?php if ($date == 08 ) echo 'selected' ; ?>  value="08">08</option>       
					<option <?php if ($date == 09 ) echo 'selected' ; ?>  value="09">09</option>       
					<option <?php if ($date == 10 ) echo 'selected' ; ?>  value="10">10</option>       
					<option <?php if ($date == 11 ) echo 'selected' ; ?>  value="11">11</option>       
					<option <?php if ($date == 12 ) echo 'selected' ; ?>  value="12">12</option>       
					<option <?php if ($date == 13 ) echo 'selected' ; ?>  value="13">13</option>       
					<option <?php if ($date == 14 ) echo 'selected' ; ?>  value="14">14</option>       
					<option <?php if ($date == 15 ) echo 'selected' ; ?>  value="15">15</option>       
					<option <?php if ($date == 16 ) echo 'selected' ; ?>  value="16">16</option>       
					<option <?php if ($date == 17 ) echo 'selected' ; ?>  value="17">17</option>       
					<option <?php if ($date == 18 ) echo 'selected' ; ?>  value="18">18</option>       
					<option <?php if ($date == 19 ) echo 'selected' ; ?>  value="19">19</option>       
					<option <?php if ($date == 20 ) echo 'selected' ; ?>  value="20">20</option>       
					<option <?php if ($date == 21 ) echo 'selected' ; ?>  value="21">21</option>       
					<option <?php if ($date == 22 ) echo 'selected' ; ?>  value="22">22</option>       
					<option <?php if ($date == 23 ) echo 'selected' ; ?>  value="23">23</option>       
					<option <?php if ($date == 24 ) echo 'selected' ; ?>  value="24">24</option>       
					<option <?php if ($date == 25 ) echo 'selected' ; ?>  value="25">25</option>       
					<option <?php if ($date == 26 ) echo 'selected' ; ?>  value="26">26</option>       
					<option <?php if ($date == 27 ) echo 'selected' ; ?>  value="27">27</option>       
					<option <?php if ($date == 28 ) echo 'selected' ; ?>  value="28">28</option>       
					<option <?php if ($date == 29 ) echo 'selected' ; ?>  value="29">29</option>       
					<option <?php if ($date == 30 ) echo 'selected' ; ?>  value="30">30</option>       
					<option <?php if ($date == 31 ) echo 'selected' ; ?>  value="31">31</option>       
				</select> 
				<br>
				<br>
				City : <input type="text" name="city" id="city" value="<?php echo $city ?>"/><br>
				Phone no : <input type="text" name="phone" size="10" id="phone" value="<?php echo $phone ?>"/><br>
				Pin code : <input type="text" name="pin" size="6" id="pin" value="<?php echo $pin ?>"/><br>
				<input type="submit" value="Update "/>

			</form>
			<a href="show_data.php"><input type="submit" value="Show stored data"></a> 
		</div>

		<script type="text/javascript" src="scripts.js"></script>
	</body>
	</html>