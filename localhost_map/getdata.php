<!DOCTYPE html>
<html>
<head> <meta charset="UTF-8">

    <link type="text/css" href="mapStyle.css" rel="stylesheet">

    </link>
    <script src="jquery-1.11.2.js"></script>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMbQF_U346cDNgBehK5fHOVi9rby-Bak4">
    </script>

    <script type="text/javascript" src="mapFunc.js">
    </script>

</head>
<body>

<?php
// CONNECT TO THE DATABASE
$DB_NAME = 'Reporting';
$DB_HOST = '';
$DB_USER = 'root';
$DB_PASS = 'root';

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

// Mata ut en händelse från databasen
$query = "SELECT * FROM report";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);


// Tom array som ska fyllas med arrayer som motsvarar rader i databasen
$data = array();


// Skapa en array beståendes av arrayer som motsvarar varje rad i basabasen

while ($row = $result->fetch_assoc()) {

    array_push($data,array_values($row));
}

// Räkna ut antal rader i databasen


$count_rows = count($data);
print_r($count_rows);

echo json_encode($data);

// CLOSE CONNECTION

mysqli_close($mysqli);


?>









<div id ="checkboxes">
    <form action="">
        <input checked type ="checkbox" name ="category" value ="Lampor" onclick="switchCheckbox(this)"> Lampanmälningar <br>
        <input checked type ="checkbox" name ="category" value ="Roads" onclick="switchCheckbox(this)"> Vägproblem

    </form>

</div>
<div id="map-canvas"></div>

</body>
</html>