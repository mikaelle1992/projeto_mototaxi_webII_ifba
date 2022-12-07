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
    <div id="form">
        <form>
            <fieldset>
                <legend>Selecione a rota</legend>
                <div class = "from-group">
                    <label for="origem">Origem</label>
                    <input type="text" class = "from-control" size="25" value=<?php echo 'endereço do usuario' ?> id="origem">
                    <small></small>
                </div>    
                <div class = "from-group">
                    <label for="destino">Destino</label>
                    <input type="text"  class = "from-control" size="25" value=<?php echo'Ajax' ?>  id="destin">  
                </div>
                <button onclick="endereço_coordenadas()">Click me</button>
                <span id="destino"></span>
                <script src= "js/api_map.js"></script>                           
            </fieldset>


            </script>
        </form>

        
</body>
</html>

