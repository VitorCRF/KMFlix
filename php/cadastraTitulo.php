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
$alo = "jisjd";

    /*
    $resultado = mysqli_query($link, "INSERT INTO titulos (titulo, ano_lancamento, tempo_duracao, wallpaper,
     classificacao, generos, atores, especie, sinopse, trailer) VALUES ('$nomeTitulo', '$generos', '$atores', '$classificacao',
     '$anoLancamento', '$especie', '$duracao', '$wallpaper', '$sinopse', '$trailer')");
    if ($resultado == true) {
    
    }
    */

    echo $nomeTitulo;
  /*  else {
        echo "Algo de errado aconteceu, tente novamente";
    }
    print_r ($_SESSION);
	

	echo json_encode($retorno);
    */


?>