<?PHP 
$conn = mysqli_connect("localhost", "root", "","jarvistesting");

// $query ="SELECT value FROM lamp";
// $result = mysqli_query($conn, $query);

function query($query){
    global $conn;

    $result = mysqli_query($conn, $query);
    $data = [];
    while( $dt = mysqli_fetch_assoc($result)){
        $data[] = $dt;
    }

    /*Bentuknya sudah array asosiatif */
    return $data;
}

// $condition = query("SELECT value FROM lamp");

?>