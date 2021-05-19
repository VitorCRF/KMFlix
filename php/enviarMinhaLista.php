<?php

session_start();
require "config.php";

$titulo_id = $_POST['titulo_id'];

$usuario_id = (int)$_SESSION["idUser"];

$resultado = mysqli_query($link, "INSERT INTO minha_lista (usuario_id, titulos_id) VALUES ('$usuario_id', '$titulo_id')");

if ($resultado) {
    echo "Titulo adicionado e armazenado na lista de favoritos.";
}

?>