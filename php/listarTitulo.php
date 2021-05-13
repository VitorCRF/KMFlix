<?php

include_once "config.php";

$result_titulo = "SELECT * FROM titulos";

$resultado = mysqli_query($link, $result_titulo);

if(($resultado) AND ($resultado -> num_rows) != 0){
    while($row_titulo = mysql_fetch_assoc($$resultado));{
        echo $row_titulo['titulo']
    }
}else{
    echo "Nenhum título foi encontrado!";
}
?>