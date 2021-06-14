<?php

header('Content-type: text/html; charset=utf-8');

include_once "config.php";

$result_titulo = "SELECT * FROM titulos";

$resultado = mysqli_query($link, $result_titulo);
$titulo['id'] = "";
$retorno['id'] = "";
if(($resultado) && ($resultado -> num_rows) != 0){
    while($row_titulo = mysqli_fetch_assoc($resultado)){
        $titulo['id'] = $row_titulo['id'];
        $titulo['titulo'] = $row_titulo['titulo'];
        $titulo['ano_lancamento'] = $row_titulo['ano_lancamento'];
        $titulo['wallpaper'] = $row_titulo['wallpaper'];
        $titulo['tempo_duracao'] = $row_titulo['tempo_duracao'];
        $titulo['classificacao'] = $row_titulo['classificacao'];
        $titulo['generos'] = $row_titulo['generos'];
        $titulo['atores'] = $row_titulo['atores'];
        $titulo['especie'] = $row_titulo['especie'];  
        $titulo['sinopse'] = $row_titulo['sinopse'];
        $titulo['relevancia'] = $row_titulo['relevancia'];
        $titulo['trailer'] = $row_titulo['trailer'];

        array_push($retorno, $titulo);
    }
}
else{
    echo "Nenhum título foi encontrado!";
}
echo json_encode($retorno);
?>