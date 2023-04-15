<?php

  // if(isset($_SERVER["POST"])){
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $password_confirm = $password;
    $email = $_POST['email'];
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null; // set $phone to null if the key is not defined
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

    $image = null;  // initialize image variable to null

    if(isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
      $image = $_FILES['image']['name'];  // get filename of uploaded file
      $destination = './images/upload/' . $image; // set the destination path
      if(move_uploaded_file($_FILES['image']['tmp_name'], $destination)) { // move file to desired location
      } else {
        echo json_encode(["success"=>false,"error"=>"Image Upload Error"]);
      }
    }
    
    // Database connection
    $conn = new mysqli('localhost','root','','ass1_web');
    if($conn->connect_error){
        echo "$conn->connect_error";
        // die("Connection Failed : ". $conn->connect_error);
        echo json_encode(["success"=>false,"error"=>"Connection Failed : ". $conn->connect_error]);
    } else {
        $stmt = $conn->prepare("insert into registration(name, username,email, password,password_confirm,phone, address, birthday, image) values(?,?,? ,?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssss", $name, $username, $email, $password,$password_confirm, $phone, $address, $birthday, $image);
        
        $execval = $stmt->execute();
        if ($execval === false) {
          echo json_encode(["success"=>false,"error"=>'Error inserting data into database: ' . $conn->error]);

            // die('Error inserting data into database: ' . $conn->error);
        }
        // include("API_Ops.php"); 
        
        $stmt->close();
        $conn->close();
        echo json_encode(["success"=>true,"message"=>'Done']);

    }

  // }

  
?>
