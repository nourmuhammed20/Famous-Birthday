<?php
	$name = $_POST['name'];
	$username = $_POST['username'];
	$password = $_POST['password'];
	$password_confirm = $_POST['repassword'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$address = $_POST['address'];
	$birthday = $_POST['birthday'];


    $image = null;  // initialize image variable to null

    $image = null;  // initialize image variable to null

    if(isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
      $image = $_FILES['image']['name'];  // get filename of uploaded file
      $destination = './images/' . $image; // set the destination path
      if(move_uploaded_file($_FILES['image']['tmp_name'], $destination)) { // move file to desired location
        echo "File uploaded successfully.";
      } else {
        echo "Error uploading file.";
      }
    }
    
    


	// Database connection
	$conn = new mysqli('localhost','root','','ass1_web');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
        $stmt = $conn->prepare("insert into registration(name, username,email, password,password_confirm,phone, address, birthday, image) values(?,?,? ,?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssss", $name, $username, $email, $password,$password_confirm, $phone, $address, $birthday, $image);
        
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}


?>