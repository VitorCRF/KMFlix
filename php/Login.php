<?php

require_once "config.php";

 	$senha = $_POST["senha"];
	$email = $_POST["email"];

	$hash = hash('sha256', $senha);

	$sql = mysqli_query($link, "SELECT * FROM user where email = '$email'");

	$i = 0;

	if($sql){
		while($linha = mysqli_fetch_assoc($sql)){
			$retorno[$i]["email"] = $linha["email"];
			$retorno[$i]["senha"] = $linha["senha"];
		}
		if($retorno[$i]["senha"] == null){
			echo "Logado";
		}else{
			echo "Login ou senha inválido";
		}	
	}
	
	



	

?>