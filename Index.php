<!DOCTYPE HTML>
<html>

<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="styles/index.css">
</head>

<body>
  <div class="header"> 
    <?php include("header.php"); ?>
  </div>


  <div class="home">
  <div class="container mt-5 pt-5">
    <h1 class="text-center my-3">Registration Form</h1>
        <form method="POST" action="DB_Ops.php" enctype="multipart/form-data" name="my-form">
            <div class="row d-flex flex-wrap justify-content-center ">
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput1" name="name" placeholder="john doe">
                  <label for="floatingInput1">Full Name</label>
                </div>
              </div>
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput2" name="username" placeholder="JohnDoe2023">
                  <label for="floatingInput2">username</label>
                </div>
              </div>
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput3" name="email" placeholder="name@example.com">
                  <label for="floatingInput3">Email</label>
                </div>
              </div>
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingInput4" name="password" placeholder="strongPassword">
                  <label for="floatingInput4">Password</label>
                </div>
              </div>
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingInput5" name="repassword" placeholder="strongPassword">
                  <label for="floatingInput5">Confirm Password</label>
                </div>
              </div>
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput6" name="phone" placeholder="+201815158811">
                  <label for="floatingInput6">Phone Number</label>
                </div>
              </div>              
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput6" name="address" placeholder="29 Ahmed Zweil">
                  <label for="floatingInput6">Address</label>
                </div>
              </div>
              <div class="col-md-6 mt-3 ">
                <div class="form-floating mb-3">
                  <input type="date" class="form-control" id="floatingInput6" name="birthday" placeholder="19-19-2000">
                  <label for="floatingInput6">birthday</label>
                </div>
              </div>      
              <div class="input-group my-3">   
                <input type="file" class="form-control" name="image" accept="image/*" id="inputGroupFile02">   
            </div>

            </div>
            <button class="btn btn-outline-primary mb-3" type="submit">Submit</button>
          </form>
    </div>  
  </div>

  <div class="foot">
    <?php include("footer.php"); ?>
  </div>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
</body>

</html>