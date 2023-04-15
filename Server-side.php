<?php

$con = new mysqli('localhost','root','','ass1_web');
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['username'])){
    $username = mysqli_real_escape_string($con,$_POST['username']);

    $query = "select count(*) as cntUser from registration where username='".$username."'";
    
    $result = mysqli_query($con,$query);
    $response = "Available";
    if(mysqli_num_rows($result)){
        $row = mysqli_fetch_array($result);
    
        $count = $row['cntUser'];
        
        if($count > 0){
            $response = "Not Available";
        }
    }
    
    echo $response;
    die;
}
?>