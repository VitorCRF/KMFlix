<?php
session_start();
require "config.php";

$nome = $_POST['nome'];
$nascimento = $_POST['nascimento'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$min = 10000;
$max = 99999;
$token = rand($min, $max);

$_SESSION["logado"] = $_SESSION["logado"] ?? False;

    $resultado = mysqli_query($link, "INSERT INTO user (nome, nascimento, email, senha, token_conta) VALUES ('$nome', '$nascimento', '$email', '$senha', '$token')");
    $buscaInfo = mysqli_query($link, "SELECT * FROM user where email = '$email' AND senha = '$senha'");

    if ($resultado == true) {

        $registro = mysqli_fetch_assoc($buscaInfo);
		$_SESSION["email"] = $registro["email"];
		$_SESSION["nome"] = $registro["nome"];
		$_SESSION["idUser"] = $registro["id"];

		$_SESSION["idSessao"] = session_id();
		$_SESSION["inicio"] = time();
		$_SESSION["tempoLimite"] = 30*9999;
		$_SESSION["logado"] = True;

		$retorno["status"] = "s";
		$retorno["mensagem"] = "Usuario autenticado com sucesso!";

    }
    else {
        echo "Algo de errado aconteceu, tente novamente";
    }
    print_r ($_SESSION);
	

	echo json_encode($retorno);


?>