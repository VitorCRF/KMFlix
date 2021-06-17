<?php

require "config.php";

$plano = $_POST['plano'];
$email = $_POST['email'];

$resultado = mysqli_query($link, "UPDATE user SET `plano` = '$plano' WHERE email = '$email'");

if ($resultado) {
    echo "plano atualizado com sucesso";
}
else {
    echo "não foi possivel atualizar o plano";
}

?>