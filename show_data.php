<?php 

include("database.php");

?>
<!DOCTYPE html>
<html>
<head>
	<title>Form Data</title>
	<link rel="stylesheet" type="text/css" href="form_data_styles.css">
</head>
<body>
  <h1 align="center" style="color: gray">Form Data</h1>
  <form method="post">
  <table class="rwd-table">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email ID</th>
      <th>Gender</th>
      <th>DOB</th>
      <th>City</th>
      <th>Phone</th>
      <th>Pin</th>
      <th>ACTION</th>
    </tr>
    <?php 

    $sql = "select * from form_data";
    $result = $database->query($sql);
    while($row = $result->fetch_assoc())
    {
      ?>

      
      <tr>
        
        <td><?php echo $row['fname'];?></td>
        <td><?php echo $row['lname'];?></td>
        <td><?php echo $row['email'];?></td>
        <td><?php echo $row['gender'];?></td>
        <td><?php echo $row['dob'];?></td>
        <td><?php echo $row['city'];?></td>
        <td><?php echo $row['phone'];?></td>
        <td><?php echo $row['pin'];?></td>
        <td><a href="edit.php?id=<?php echo $row['id'];?>">Edit</a></td>
      </tr>
    
      <?php } ?>
      
    </table>
    </form>
    <br>
    <br>
    <a href="index.php"><input type="submit" value="Add More Data"/></a>
    <script type="text/javascript" src=""></script>
  </body>
  </html>