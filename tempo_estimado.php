<?php

$destino = "Avenida Vasco Neto, Ubaitaba, Bahia, Brasil";
$origem = "Av. Walter Passos, 198 - Ubaitaba, BA, 45545-000, Brasil";


// https://maps.googleapis.com/maps/api/distancematrix/json?destinations=Avenida Vasco Neto, Ubaitaba, Bahia, Brasil&language=fr-FR&mode=motorcycle&origins=Av. Walter Passos, 198 - Ubaitaba, BA, 45545-000, Brasil&key=AIzaSyBVE_qu70-1LakWAX0Vkydr-RmGXjZzk5A
$url = "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" . $destino . "&language=fr-FR&mode=motorcycle&origins=" . $origem . "&key=AIzaSyBVE_qu70-1LakWAX0Vkydr-RmGXjZzk5A";
$url_tratado = str_replace(' ', '', $url);

$retorno = file_get_contents($url_tratado);
$dados = json_decode($retorno, true);

$distancia_km = $dados['rows'][0]['elements'][0]['distance']['text'];
$distancia_minutos = $dados['rows'][0]['elements'][0]['duration']['text'];
echo "Distancia até seu destino é de: " . $distancia_km . "\n e tempo estimado de chegada sem transito é de: " . $distancia_minutos;


    ?>