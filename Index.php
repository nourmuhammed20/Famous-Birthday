<!DOCTYPE HTML>
<html>

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/index.css">
</head>

<body>
    <div class="header">
        <?php include("header.php"); ?>
    </div>


    <div>
        <div class="home mb-5 bg-light">
            <div class="container mt-5 pt-5">
                <h1 class="text-center my-3">Registration Form</h1>
                <div class="card border-danger text-bg-danger mb-3 ">
                    <div class="card-body text-danger p-2 ">
                        <h5 class="card-title text-center text-light mb-0">All Fields are required *</h5>
                    </div>
                </div>

                <form method="POST" action="" id="form" enctype="multipart/form-data" name="my-form">
                    <div class="row d-flex flex-wrap justify-content-center ">
                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input type="text" required class="form-control" id="fname_id" name="name"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Example: John doe">
                                <label for="fname_id">Full Name</label>
                            </div>
                        </div>

                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input required type="text" class="form-control" id="uname_id" name="username"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Must Be Unique">
                                <label for="uname_id">username</label>
                                <div id="uname_response"></div>
                            </div>
                        </div>

                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input required class="form-control" id="email_id" name="email" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Must Contain @ , .com">
                                <label for="email_id">Email</label>
                            </div>
                        </div>

                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input type="password" required class="form-control" id="password_id" name="password"
                                    data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom"
                                    title="Must contain : <ul><li>Eight characters or more</li><li>Number & Special char</li><li>Upper/lower case chars</li></ul>" />
                                <label for="password_id">Password</label>
                            </div>
                        </div>


                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input type="password" required  class="form-control" id="password2_id" name="repassword"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom"
                                    title="Must Match previous password">
                                <label for="password2_id">Confirm Password</label>
                            </div>
                        </div>

                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input type="text"  required class="form-control" id="phone" name="phone" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Only accept Egyptian Numbers without +20">
                                <label for="phone">Phone Number</label>
                            </div>
                        </div>

                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input type="text" required class="form-control" id="address_id" name="address"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Example : 29 cairo st">
                                <label for="address_id">Address</label>
                            </div>
                        </div>

                        <div class="col-md-6 mt-3 ">
                            <div class="form-floating mb-3">
                                <input type="date" required class="form-control" id="bd_id" name="birthday"
                                    data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom"
                                    title="Valid date between : <br> 1900-2023">
                                <label for="bd_id">birthday</label>
                            </div>
                        </div>

                        <div class="input-group my-3">
                            <input type="file" required class="form-control" name="image" accept="image/*" id="img_id"
                                data-bs-toggle="tooltip" data-bs-placement="bottom"
                                title="Only Image Extensions Available">
                        </div>

                    </div>
                    <button class="btn btn-outline-primary mb-3" type="submit" id="submitBtn">Submit</button>
                </form>

                <div class="card d-none mb-3 ">
                    <div class="card-body  p-2 ">
                        <h5 class="card-title text-center text-light mb-0" id="message"></h5>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" style="background-color: blueviolet;">
                        <div class='text-center my-2 text-light fs-3 fw-bold'>Famous Born at your birthday</div>
                    </div>
                    <div class="card-body mx-2">
                        <div class="row" id="names" style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot">
            <?php include("footer.php"); ?>
        </div>


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
        </script>
        <script src="./scripts/index.js"></script>
        <script src="./scripts/api.js"></script>
</body>

</html>