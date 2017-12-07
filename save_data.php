<?php 
include("database.php");
class SaveData
{

	function save_data(){
		global $database;
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$email=$_POST['email'];
		$gender=$_POST['gender'];
		$dob = $_POST['year'] . '-' . $_POST['month'] . '-' . $_POST['date'];
		$city=$_POST['city'];
		$phone=$_POST['phone'];
		$pin=$_POST['pin'];

		//checking email already there or not
		$sql = "select email from form_data where email='$email'";
		$result = $database->query($sql);

		if($result->num_rows > 0){
			header('Location: form.php?error=email_already_exist');
    		 exit();
		}else{
			$sql = "insert into form_data (fname,lname,email,gender,dob,city,phone,pin) 
			values('$fname','$lname','$email','$gender','$dob','$city','$phone','$pin')";
			$result = $database->query($sql);
			echo "<body style='background-color:002933;'>

			<div  
			style='margin : auto; 
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: block;color:green;text-align:center; font-weight:strong;'>
			<h2 
			style='color:green;
			font-weight:strong;
			text-align:center;'>Data submission is successful</h2>
			<form action='show_data.php'>
			<button type='submit' style='width:250px; height:50px; background-color:#ff9933;border:2px solid green; '>Show form details</button>
			</form>
			</div>
			</body>";
		}
	}
}
$sd = new SaveData();
$sd->save_data();

?>