<?php 
include("database.php"); 

$email = trim($_POST['email']);
$sql = "select email from form_data where email='$email'";
$result = $database->query($sql);
if($result->num_rows == 0){
	echo 1;
}else{
	echo 2;
}
exit;
?>
