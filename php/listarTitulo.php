<?php

include_once "config.php";

$result_titulo = "SELECT * FROM titulos";

$resultado = mysqli_query($link, $result_titulo);

if(($resultado) AND ($resultado -> num_rows) != 0){
    while($row_titulo = mysqli_fetch_assoc($resultado)){
        echo $row_titulo['titulo'] . "<br>";
        echo $row_titulo['ano_lancamento'] . "<br>";
        echo $row_titulo['tempo_duracao'] . "<br>";
        echo $row_titulo['classificacao'] . "<br>";
        echo $row_titulo['genero1'] . "<br>";
        echo $row_titulo['genero2'] . "<br>";
        echo $row_titulo['genero3'] . "<br>";
        echo $row_titulo['genero4'] . "<br>";
        echo $row_titulo['ator1'] . "<br>";
        echo $row_titulo['ator2'] . "<br>";
        echo $row_titulo['ator3'] . "<br>";
        echo $row_titulo['especie'] . "<hr>";
    }
}else{
    echo "Nenhum título foi encontrado!";
}
?>