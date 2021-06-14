<?php
session_start();
require "config.php";

$nomeTitulo = $_POST['nomeTitulo'];
$generos = $_POST['generos'];
$atores = $_POST['atores'];
$classificacao = $_POST['classificacao'];
$anoLancamento = $_POST['anoLancamento'];
$especie = $_POST['especie'];
$duracao = $_POST['duracao'];
$sinopse = $_POST['sinopse'];
$trailer = $_POST['trailer'];
$wallpaper = $_POST['wallpaper'];


 
    $resultado = mysqli_query($link, "UPDATE titulos  SET `titulo` = '$nomeTitulo', `ano_lancamento` = '$anoLancamento',
        `tempo_duracao` = '$duracao', `classificacao` = '$classificacao', `generos` = '$generos', `atores` = '$atores',
        `especie` = '$especie', `sinopse` = '$sinopse', `trailer` = '$trailer'
        WHERE wallpaper = '$wallpaper'");
    if ($resultado == true) {
        echo "sucesso";
    }


    else {
        echo "Algo de errado aconteceu, tente novamente";
    }
    print_r ($_SESSION);
	

	echo json_encode($retorno);
  


?>