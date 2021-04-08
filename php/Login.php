<?php

require_once "config.php";

 	$senha = $_POST["campoLoginEmail"];
	$email = $_POST["campoLoginSenha"];
	$sql = "SELECT * FROM user";
         
	if($stmt = mysqli_prepare($link, $sql)){
		
		if(mysqli_stmt_execute($stmt)){
			echo "$sql";
		} else{
			echo "OUps! Algo deu errado. Por favor, tente novamente mais tarde.";
		}
	} 
?>