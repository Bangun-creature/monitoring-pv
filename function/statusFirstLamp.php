<?PHP require_once '../db/database.php';

$result = query("SELECT value FROM lamp WHERE kind = 'merah'");
$data = $result[0]["value"];

// Kirim status lampu ke esp (langsung saja echo -> nanti tangani di bagian response esp nya) 
// echo $data;
if($data == 1){
    echo "ON";
} else {
    echo "OFF";
}
?>
