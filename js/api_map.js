
var map;
var count = 0;
var now = new Date();
var sua_posicao_latitude = 0;
var sua_posicao_longitude = 0;
var destino_posicao_latitude = 0;
var destino_posicao_longitude = 0;



if ('geolocation' in navigator) {
    //função que recebe como parametrô outra
    navigator.geolocation.getCurrentPosition(function (position) {
        sua_posicao_latitude = position.coords.latitude;
        sua_posicao_longitude = position.coords.longitude;
    },)

} else {
    console.log('não foi possivel pegar sua localização')
}


function initMap() {
    // instanciar o map 

    if ( now.getHours() > 18)
        var mapOpcoes = {
            center: { lat: -14.310550921763843, lng: -39.32333528995514 },
            zoom: 16,
            mapTypeId: 'roadmap', // roadmap, satallite, hybrid, terrain 
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#878787"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f9f5ed"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#aee0f4"
                        }
                    ]
                }
            ]
        };
    else if (now.getHours() < 18)
        var mapOpcoes = {
            center: { lat: -14.3048, lng: -39.3232 },
            zoom: 16,
            mapTypeId: 'roadmap',
            styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#263c3f" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#6b9a76" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#38414e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#212a37" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9ca5b3" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#746855" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f2835" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#f3d19c" }],
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#2f3948" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#515c6d" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#17263c" }],
                },
            ]
        };
    map = new google.maps.Map(document.getElementById('map'), mapOpcoes);
    marcadores(map);

}


function marcadores(map, destino_posicao_latitude, destino_posicao_longitude) {
    var marker = new google.maps.Marker({
        position: { lat: sua_posicao_latitude, lng: sua_posicao_longitude },
        map: map,
        title: 'Sua localização',
        animation: google.maps.Animation.DROP,
        draggable: true

    });
    
    marcador_destino(map, destino_posicao_latitude, destino_posicao_longitude);
    endereço_origem(sua_posicao_latitude, sua_posicao_longitude)
    // evento de click com marcador para destino
}

function marcador_destino(map, destino_posicao_latitude, destino_posicao_longitude) {       
    map.addListener('click', function (e) {
        var clickPosition = e.latLng;
        var marker_destino = new google.maps.Marker({
            position: clickPosition,
            map: map,
            title: 'Seu destino',
            animation: google.maps.Animation.DROP,
            draggable: true

        });
   
        destino_posicao_latitude = e.latLng.lat();
        destino_posicao_longitude = e.latLng.lng();
        endereço_coordenadas(destino_posicao_latitude, destino_posicao_longitude);
        distancia_tempo_estimado(destino_posicao_latitude, destino_posicao_longitude);
        tempo_estimado(destino_posicao_latitude, destino_posicao_longitude);


    });
}


function endereço_origem(latitude, longitude) {
    var origem = document.querySelector("#origem");
    var req = new XMLHttpRequest();

    var action = "localizacao_atual.php";
    var param ="latitude="+ latitude + "&longitude="+ longitude;

    req.open("GET", action+"?"+ param, true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            origem.value = req.responseText;
            endereco_atual(req.responseText);
        }
        else{
             origem.innerHTML = "Usuario encontrado"; 
        }
    }
    req.send(origem);
}


function endereço_coordenadas(latitude, longitude) {
    var destino = document.querySelector("#destino");
    var req = new XMLHttpRequest();

    var action = "consulta.php";
    var param ="latitude="+ latitude + "&longitude="+ longitude;

    req.open("GET", action+"?"+ param, true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            destino.value = req.responseText;
            test(req.responseText);
        }
        else{
             destino.innerHTML = "Usuario encontrado"; 
        }
    }
    req.send(destino);
    

}


function distancia_tempo_estimado(latitude, longitude) {
    var msg = document.querySelector("#distancia_tempo");
    var req = new XMLHttpRequest();

    var action = "tempo_estimado.php";
    var param ="latitude="+ latitude + "&longitude="+ longitude;

    req.open("GET", action+"?"+ param, true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            document.getElementById("distancia_tempo").innerHTML = req.responseText;
        }
        else{
             msg.innerHTML = "Usuario encontrado"; 
        }
    }
    req.send(msg);
}


// function tempo_estimado() {
  
//     const Http = new XMLHttpRequest();
//     const url='https://maps.googleapis.com/maps/api/geocode/json?latlng=-14.313373397055184,-39.32032585144043&key=AIzaSyBVE_qu70-1LakWAX0Vkydr-RmGXjZzk5A';
//     Http.open("GET", url);
//     Http.send();

//     Http.onreadystatechange = (e) => {
//     console.log(Http.responseText)
//     }
// }