<?php
	
	require "config.php";

	$buscaInfos = mysqli_query($link, "SELECT * FROM titulos");

    if ($buscaInfos) {
        $data = ($buscaInfos);
        //$data = ["1","2","3"];
        echo json_encode($data);
    }
	
?>