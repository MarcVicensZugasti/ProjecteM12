<?php 
	require_once('conexion.php');
	require_once('usuario.php');
	
	class CrudUsuario{

		public function __construct(){}

		//inserta les dades de l'usuari
		public function insertar($usuario){
			$db=DB::conectar();
			$insert=$db->prepare('INSERT INTO USUARIOS VALUES(NULL,:nombre, :clave)');
			$insert->bindValue('nombre',$usuario->getNombre());
			//encriptar la clau
			$pass=password_hash($usuario->getClave(),PASSWORD_DEFAULT);
			$insert->bindValue('clave',$pass);
			$insert->execute();
		}

		//obtens usuari per al login
		public function obtenerUsuario($nombre, $clave){
			$db=Db::conectar();
			$select=$db->prepare('SELECT * FROM USUARIOS WHERE nombre=:nombre');
			$select->bindValue('nombre',$nombre);
			$select->execute();
			$registro=$select->fetch();
			$usuario=new Usuario();
			//comprova qu ela contrasenya sigui correcta
			if (password_verify($clave, $registro['clave'])) {				
				//si es correcta, et don els valors de la base de dades
				$usuario->setId($registro['Id']);
				$usuario->setNombre($registro['nombre']);
				$usuario->setClave($registro['clave']);
			}			
			return $usuario;
		}

		//busca el nom de l'usuari si existeix
		public function buscarUsuario($nombre){
			$db=Db::conectar();
			$select=$db->prepare('SELECT * FROM USUARIOS WHERE nombre=:nombre');
			$select->bindValue('nombre',$nombre);
			$select->execute();
			$registro=$select->fetch();
			if($registro['Id']!=NULL){
				$usado=False;
			}else{
				$usado=True;
			}	
			return $usado;
		}
	}
?>