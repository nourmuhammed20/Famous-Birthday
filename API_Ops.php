<body>
<form method='get'>
<input type='number' name='month' min="1" max="12">
<input type='number' name='day' min="1" max="31">
<input type='submit' >
</form>

</body>


<?php

if (isset($_GET['month']) && isset($_GET['day'])) {
    $month = $_GET['month'];
    $day = $_GET['day'];
} else {
    $month = 3;
    $day = 3;
}

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/actors/list-born-today?month=$month&day=$day",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
        "X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
		"X-RapidAPI-Key: 76f5f519e9msha8c8ade6c715a75p159cbejsn569bda771836"
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);
if ($err) {
    echo "cURL Error #:" . $err;
} else {
    $nconsts = json_decode($response);
    $names = array();
    foreach ($nconsts as $nconst) {
		$nconst=str_replace("/name/", '', $nconst);
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=$nconst",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => [
                "X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
				"X-RapidAPI-Key: 76f5f519e9msha8c8ade6c715a75p159cbejsn569bda771836"
            ],
        ]);
        $bio_response = curl_exec($curl);
        $bio_err = curl_error($curl);
        curl_close($curl);
        if ($bio_err) {
            echo "cURL Error #:" . $bio_err;
        } else {
            $bio = json_decode($bio_response);
            if (isset($bio->name)) {
                $names[] = $bio->name;
            }
        }
    }
    // echo json_encode($names);


	echo '<div class="container"><div class="row mt-3">';
    foreach ($names as $name) {
		echo '<div class="col-md-4">';
		echo '<div class="bg-primary text-white px-3 py-2 m-2">'.$name.'</div>';
	    echo '</div>';
    }
	echo '</div></div>';
	
}