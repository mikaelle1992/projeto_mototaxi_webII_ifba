<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mototaxista</title>
    <!--usabilidade melhor-->
    <meta name = "viewport" content = "initial-ascale=1.0" >
    <link rel="stylesheet" type = "text/css" href="css/map.css">
    
</head>
<body>
    <!-- <button id="satellite">Mudar para satélite</button> -->
    <div id="map"></div>
    <script src= "js/api_map.js"></script>

    <!--Chamada das API's -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAH4Nf7e2KamSEe0rsZ04KvR4L6jJ7Cmdc&callback=initMap&libraries=geometry" async defer>
    </script> 
    <div id= "form">
        <fieldset>            
            <form action="script.php" method="post">
                <legend><b>Endereço</b></legend>
                    <div class = "inputBox">
                        <label for="origem" class="inputCorrida"><b>Origem:</b></label>
                        <span id="msg_origem"></span>
                    </div>    
                    <div class = "inputBox">
                        <label for="destino" class="inputCorrida"><b>Destino:</b></label>
                        <span id="msg"></span>
                    </div>
                    <div class = "inputBox">
                        <label for="tempo" class="inputCorrida"><b>Tempo estimado de chegada: </b></label>
                        <span id="distancia_tempo"></span>
                    </div>
                    <div class = "inputBox">
                        <label for="tempo" class="inputCorrida"><b>Valor da corrida:</b>R$ 5:00</label>
                    </div>
                    <!-- O segundo valor estará selecionado inicialmente  -->
                    <div>
                    <p><b>Escolha a forma de pagamento</b></p>
                        <select name="select">
                            <option value="valor1">dinheiro</option>
                            <option value="valor2" selected>Cartão</option>
                            <option value="valor3">pix</option>  
                        </select> 
                    </div>   
            </form> 
                <!-- <button type = "button">CONFIRMAR CORRIDA</button> -->
                <div>
                <a href='processando.php'><button>CONFIRMAR CORRIDA</button></a>
                </div>
            <!-- <script src= "js/api_map.js"></script> -->
        </fieldset>
    </div>
    
</body>
</html>

