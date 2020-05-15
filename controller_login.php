<?php 
	require_once('usuario.php');
	require_once('crud_usuario.php');
	require_once('conexion.php');

	//inici sessio
	session_start();

	$usuario=new Usuario();
	$crud=new CrudUsuario();
	//mira si el usuari ja existeix
	if (isset($_POST['registrarse'])) {
		$usuario->setNombre($_POST['usuario']);
		$usuario->setClave($_POST['pas']);
		if ($crud->buscarUsuario($_POST['usuario'])) {
			$crud->insertar($usuario);
			header('Location: index.php');
		}else{
			header  ('Location: error.php?mensaje=Aquest usuari ja existeix') ;
		}		
		
	}elseif (isset($_POST['entrar'])) { 
		$usuario=$crud->obtenerUsuario($_POST['usuario'],$_POST['pas']);
	
		if ($usuario->getId()!=NULL) {
			$_SESSION['usuario']=$usuario; //si troba al usuari creea la sessio
			header('Location: cuenta.php'); //tenvia a la pagina del joc
		}else{
			header('Location: error.php?mensaje=El usuari o la contrasenya son incorrectes'); // si les dades son incorrectes et dona error
		}
	}elseif(isset($_POST['surt'])){ 
		header('Location: index.php');
		unset($_SESSION['usuario']); //tanca la sessio
	}
?>