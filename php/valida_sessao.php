<?php 

    session_start();
    
    if(isset($_SESSION["idSessao"]) == false){
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Usuario não autenticado";
        echo "nao existe id <br>";
        print_r($_SESSION);
    }else{
        $tempo = time() - $_SESSION["inicio"];
        echo "existe id <br>";
        print_r($_SESSION);
        if($tempo > $_SESSION["tempoLimite"]){
            session_destroy();
            echo "acabou o tempo <br>";
            print_r($_SESSION);
        }else{
            $_SESSION["inicio"] = time();
            $retorno["status"] = "s";
            $retorno["mensagem"] = "Sessao renovada";
            echo "sessao renovada <br>";
            print_r($_SESSION);
        }
    }

?>