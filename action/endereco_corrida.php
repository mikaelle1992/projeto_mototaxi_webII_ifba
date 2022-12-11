<?php
session_start();
require_once "conecta.php";

$origem = $_POST['origem'];
$destino = $_POST['destino'];
$valor_corrida = "5,00";
$forma_pagamento_corrida = "cartão";

date_default_timezone_set('America/Sao_Paulo');
$date = date('d-m-Y');
$horario = date('H:i:s');

if(isset($origem) && isset($destino)){
$result = pg_query($conexao, "INSERT INTO corrida (data_corrida, horario_corrida, origem_corrida, destino_corrida, valor_corrida, forma_pagamento_corrida, corre_user_fk, corre_moto_fk) VALUES ('$date', '$horario', '$origem', '$destino', '$valor_corrida', '$forma_pagamento_corrida', 1, 1)");

if(!$result){
    die("Falha ao realizar inserção");
}
else{
    header("Location: ../processando.php"); 
}

}    
?>