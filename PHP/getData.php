<!DOCTYPE html>
<html>
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

print_r($result);
// Tom array som ska fyllas med arrayer som motsvarar rader i databasen
$data = array();


// Skapa en array beståendes av arrayer som motsvarar varje rad i basabasen

while ($row = $result->fetch_assoc()) {

    array_push($data,array_values($row));
}

// Räkna ut antal rader i databasen

$count_rows = count($data);
echo(json_encode(data));

// CLOSE CONNECTION
mysqli_close($mysqli);

?>

<script>

    var data= <?php echo json_encode($data, JSON_FORCE_OBJECT); ?>;
    alert(data);
    var count_rows = <?php echo json_encode($count_rows); ?>;

</script>

</body>
</html>