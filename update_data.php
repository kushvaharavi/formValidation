<?php 
include("database.php");
class UpdateData
{

	function update_data(){
		global $database;
		$id = $_GET['id'];
		$fname= $_POST['fname'];
		$lname= $_POST['lname'];
		$email= $_POST['email'];
		$gender=$_POST['gender'];
		$dob = $_POST['year'] . '-' . $_POST['month'] . '-' . $_POST['date'];
		$city= $_POST['city'];
		$phone= $_POST['phone'];
		$pin= $_POST['pin'];
		$sql = "update form_data set fname='$fname',lname='$lname',email='$email',gender='$gender',dob='$dob',city='$city',phone='$phone',pin='$pin' where id=$id";
		$result = $database->query($sql);
		if($result){
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
			text-align:center;'>Data updation is successful</h2>
			<form action='show_data.php'>
			<button type='submit' style='width:250px; height:50px; background-color:#ff9933;border:2px solid green; '>Show form details</button>
			</form>
			</div>
			</body>";

			
		}
		else {
			echo "you have done mistake";
		}
	}
}
$ud = new UpdateData();
$ud->update_data();

?>