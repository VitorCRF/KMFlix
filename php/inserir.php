<?php

	$nome = $_POST["campoNome"];
	$data = $_POST["campoNascimento"];
	$email = $_POST["campoEmail"];
	$senha = $_POST["campoSenha"];

	$con = mysqli_connect("localhost:8889", "root", "root", "EXDB");

	mysqli_query($con,"INSERT INTO usuarios (nome, data, email, senha)
	VALUES ('$nome', '$data', '$email', '$senha')");


?>	