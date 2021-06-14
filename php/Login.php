<?php
	session_start();
	
	require "config.php";

	$email = $_POST["email"];
	$senha = $_POST["senhaHash"];
	$_SESSION["logado"] = $_SESSION["logado"] ?? False;

	

	$resultado = mysqli_query($link, "SELECT * FROM user where email = '$email' AND senha = '$senha'");
	$retorno["status"] = "n";
	$retorno["mensagem"] = "Usuario ou senha inválidos!";

	if(mysqli_num_rows($resultado) > 0){
		$registro = mysqli_fetch_assoc($resultado);
		$_SESSION["email"] = $registro["email"];
		$_SESSION["nome"] = $registro["nome"];
		$_SESSION["idUser"] = $registro["id"];
		$_SESSION["isAdmin"] = $registro["isAdmin"];
		
		$_SESSION["idSessao"] = session_id();
		$_SESSION["inicio"] = time();
		$_SESSION["tempoLimite"] = 30*9999 ;
		$_SESSION["logado"] = True;

		$retorno["status"] = "s";
		$retorno["mensagem"] = "Usuario autenticado com sucesso!";

		
	
	}
	
	echo json_encode($retorno);
	

?>