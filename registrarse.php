<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<title>Registrarse</title>
	<style>  
	section .sectionImatge{
     height: 650px;
} 
.caixa{
    height: 370px;
    width: 450px;
    background-color: #0d1f1f;
    margin: 50px auto;
    opacity: .8;
    color: white;
}
body {

	background: url(images/fonsIndex.png) no-repeat center top;
	background-size: cover;

}
	</style>
</head>
<body>
<header>
<div style="text-align: center; font-size: 20px; border: 1px solid #000000;  background-color: #000000; color:#FFFFFF ">
		<h1>LAST GRAVE</h1>
	</div>
</header>
<div style="text-align: center; font-size: 20px; border: 1px solid #00FF00;  background-color: #088A29; color:#FFFFFF "> 
			<h1>Registre</h1>
		</div>
		<section>
		<div class="sectionImatge">
            <br><br>
            <div class="caixa">
                <br>
		
			<form  action="controller_login.php" method="post">
				<p>
				<div style= "color:#088A29; font-size: 20px; margin-left: 36%" >
				Nom d'usuari
				<br>
				</div>
					<input class="form-control" style="width:250px; margin-left:22%;" type="text" name="usuario" required="">
				</p>
				<br>
				<p>
				<div style= "color:#088A29; font-size: 20px; margin-left: 36% ">
							Contrasenya
				</div>
					<input class="form-control" style="width:250px; margin-left:22%;"  type="password" name="pas" required="">
				</p>
				<p>
					<input type="hidden" name="registrarse" value="registrarse">
					<br><button class="btn btn-dark" style="padding: 10px 15px;   margin-left: 37% ">Registrar-se</button>
				</p>
				<p style="margin-left: 39%"><a href="index.php">Iniciar Sessió</a></p>
			</form>
		
		</div>
            </div>
</section>

</body>
</html>

