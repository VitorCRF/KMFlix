<?php 

    $arquivo_nome = $_FILES["file"]["name"];

    $arquivo = explode('.', $arquivo_nome);

    $arquivo_ext = strtolower(end($arquivo));

    $largura = 1280;
    $altura = 640;

    if($arquivo_ext == "jpg"){
        $imagem_temp = imagecreatefromjpg($_FILES["file"]["tmp_name"]);
        $largura_original = imagesx($imagem_temp);
        $altura_original = imagesy($imagem_temp);

        $porcentagem_largura = (($largura * 100) / $largura_original) * 0.01;
        $porcentagem_altura = (($largura * 100) / $altura_original) * 0.01;

        echo $porcentagem_largura;
        echo "vtnc";

        $largura_nova = $largura_original * $porcentagem_largura;
        $altura_nova = $altura_original * $porcentagem_altura;

        $imagem_redimensionada = imagecreatetruecolor($altura_nova, $largura_nova);

        imagecopyresampled($imagem_redimensionada, $imagem_temp, 0, 0, 0, 0, $largura_nova, $altura_nova,
         $largura_original, $altura_original);

         imagejpg($imagem_redimensionada, "../public/img/nova_imagem.jpg");
    }

?>