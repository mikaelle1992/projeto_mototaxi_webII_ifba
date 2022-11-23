
var map;
var now = new Date();

if (now.getHours() >=0 && now.getHours() < 12)
    function initMap() {
    // instanciar o map 
       var mapOpcoes = {
           center: {lat: -14.3048, lng : -39.3232},
           zoom:15,
           mapTypeId: 'roadmap', // roadmap, satallite, hybrid, terrain 
           styles:[
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
       map = new google.maps.Map(document.getElementById('map'), mapOpcoes);
   
};

if (now.getHours() > 12)
    function initMap() {
    // instanciar o map 
       var mapOpcoes = {
           center: {lat: -14.3048, lng : -39.3232},
           zoom:15,
           mapTypeId: 'roadmap', // roadmap, satallite, hybrid, terrain 
           styles:[
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
   
};



