<?php


if (isset($_GET['birthday'])) {
    $date = $_GET['birthday'];
    $date_components = explode('-', $date);
    $month = $date_components[1];
    $day = $date_components[2];
} else {
    $month = 1;
    $day = 1;
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
		"X-RapidAPI-Key:  5ae267644cmsh662f5485d8b340ep11e8dbjsn07196ef43dbc"
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
				"X-RapidAPI-Key: 5ae267644cmsh662f5485d8b340ep11e8dbjsn07196ef43dbc"
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
                // echo $bio->name;
            }
        }
    }

    echo json_encode($names);
	
}