<!DOCTYPE html>
<html>
<head>
	<title>Error al registrarse</title>
	
</head>
<body>
	<header>
	<div style="text-align: center; font-size: 20px; border: 1px solid #000000;  background-color: #000000; color:#FFFFFF "> 
			<h1>Last Grave</h1>
		</div>
</header>

	<div class="w3-container w3-red">
		<h1><?php echo $_GET['mensaje'];?></h1>
		<a href="index.php">Tornar al registre</a>
	</div>
</body>
</html>