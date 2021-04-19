<?php
header("Access-Control-Allow-Origin: *");

if ($_REQUEST["firstname"] != "" && $_REQUEST["lastname"] != "" && $_REQUEST['email'] != "" && $_REQUEST["password"]) {
    $str = file_get_contents('http://localhost/users.json');
    $json = json_decode($str, true);
    // print_r($json);
    $insert_new_user = true;
    foreach ($json as $item) {
        // echo "json email:".$json["email"]." request email:".$_REQUEST['email']."\n";
        if ($item["email"] == $_REQUEST['email']) {
            echo "user already exists";
            $insert_new_user = false;
        } 
    }
    if ($insert_new_user) {
        $data = [
            "firstname"=>$_REQUEST["firstname"],
            "lastname"=>$_REQUEST["lastname"],
            "email"=>$_REQUEST['email'],
            "password"=>$_REQUEST["password"]
        ];
        array_push($json, $data);
        $jsonData = json_encode($json);
        // print_r($json) ;
        file_put_contents('C:\xampp\htdocs\users.json', $jsonData);
        echo "new user inserted";
    }
} else {
    echo "invalid request";
}
