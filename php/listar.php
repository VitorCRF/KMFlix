<?php
	$con = mysqli_connect("localhost:8889", "root", "root", "EXDB");
	$resultado = mysqli_query($con,"SELECT * FROM usuarios");

	$i = 0;

	while($linha = mysqli_fetch_assoc($resultado)){
		$retorno[$i]["nome"] = $linha["nome"];
		$retorno[$i]["data"] = $linha["data"];
		$retorno[$i]["email"] = $linha["email"];
		$retorno[$i]["senha"] = $linha["senha"];
		
		$i++;
	}

	echo json_encode($retorno);
?>