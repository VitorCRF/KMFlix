<?php 

    session_start();
    require "config.php";

    $usuario_id = (int)$_SESSION["idUser"];

    $buscaInfo = mysqli_query($link, "SELECT * FROM minha_lista where usuario_id = '$usuario_id'");

    $info['id'] = "";
    $retorno['id'] = "";

    if (($buscaInfo) && ($buscaInfo -> num_rows) != 0) {

        while($result = mysqli_fetch_assoc($buscaInfo)) {
            $info['id'] = $result['id'];
            $info['usuario_id'] = $result['usuario_id'];
            $info['titulos_id'] = $result['titulos_id'];

            array_push($retorno, $info);
        }

    }
    else {
        echo "Algo de errado aconteceu, tente novamente";
    }

    echo json_encode($retorno);

?>