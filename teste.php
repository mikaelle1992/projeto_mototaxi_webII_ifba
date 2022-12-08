<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>deu certo</h1>
    <script type="text/javascript">
       const Http = new XMLHttpRequest();
        const url='https://maps.googleapis.com/maps/api/geocode/json?latlng=-14.313373397055184,-39.32032585144043&key=AIzaSyBVE_qu70-1LakWAX0Vkydr-RmGXjZzk5A';
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        }

    </script>
    
    </script>
</body>
</html>