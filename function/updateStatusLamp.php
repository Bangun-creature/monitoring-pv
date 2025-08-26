<?PHP 
require_once '../db/database.php';
$kind = $_GET["kindLamp"];
$condition = $_GET["sensorValue"];

function updateData($kindData, $conditionValue){
    global $conn;
    /*Update DBMS*/
    $updateQuery = "UPDATE lamp SET value = $conditionValue WHERE kind = '$kindData'";

    $result = mysqli_query($conn, $updateQuery);
    if($result){
        echo "Data Berhasil Di kirim";
    } else {
        echo "Gagal Terkirim";
    }

    return mysqli_affected_rows($conn);
};

/*Panggil Functionnya*/ 
updateData($kind, $condition);



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Testing Update</h1>
</body>
</html>