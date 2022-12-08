<?php

$latitude = $_REQUEST["latitude"];
$longitude = $_REQUEST["longitude"];

//https://maps.googleapis.com/maps/api/geocode/json?latlng=-14.313373397055184,-39.32032585144043&key=AIzaSyBVE_qu70-1LakWAX0Vkydr-RmGXjZzk5A

$url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" . $latitude . "," . $longitude . "&key=AIzaSyBVE_qu70-1LakWAX0Vkydr-RmGXjZzk5A";

$retorno = file_get_contents($url);

if(!$retorno){
    die("Erro na consulta do mapa");
} else {
    $dados = json_decode($retorno, true);
    $endereco_origem = $dados['results'][0]['address_components'][1]['long_name'];
    echo $endereco_origem;
    // echo'<pre>';
// print_r($dados);

}
?>
