<?php 
	session_start();
	if (!isset($_SESSION['usuario'])) {
		header('Location: index.php');
	}
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<title>La teva sessió</title>
	<style>  

body {

	background: url(images/pantalla.png) no-repeat center top;
	background-size: cover;
}
	</style>
</head>
<body>
	

<div style="text-align: center; font-size: 20px; border: 1px solid #000000;  background-color: #000000; color:#FFFFFF "> 
		<h1>LAST GRAVE</h1>
	</div>
	<br> <br> 
	<div style= " position:absolute; margin-left: 28.8%; top: 19.5%;">
	  <?php  include 'indexGame.html';  ?>   
</div>
	  <div style= " position:absolute;  top: 85%">
	<form  action="controller_login.php" method="post">
		<input type="hidden" name="surt" value="surt">
		<button class="btn btn-warning" style="margin-left: 900px;">Tanca la sessió</button>
	</form>
</div>
</body>
</html>



