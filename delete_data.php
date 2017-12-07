<?php 
include("database.php");
	class DeleteData{
		$sql = "delete from form_data where id=':id'";
		this->bindParam(':id',$_POST['id']);
		$result = this->query($sql);
		if ($result) {
			echo "delete one row successfully";
		}
		else{
			echo "you made a mistake";
		}
	}
 ?>