<?php
header("Access-Control-Allow-Origin: *");

if ( $_REQUEST['email'] != "" && $_REQUEST["password"]) {
    $str = file_get_contents('http://localhost/users.json');
    $json = json_decode($str, true);
    // print_r($json);
    $user_found = true;
    foreach ($json as $item) {
        // echo "json email:".$json["email"]." request email:".$_REQUEST['email']."\n";
        if ($item["email"] == $_REQUEST['email'] && $item["password"] == $_REQUEST['password']) {
            echo "Hi there welcome to the login";
            $insert_new_user = false;
        } else {
            $user_found = false;
        }
    }
    if(!$user_found) {
        echo "user does not exist";
    }
    // if ($insert_new_user) {
    //     $data = [
    //         "firstname"=>$_REQUEST["firstname"],
    //         "lastname"=>$_REQUEST["lastname"],
    //         "email"=>$_REQUEST['email'],
    //         "password"=>$_REQUEST["password"]
    //     ];
    //     array_push($json, $data);
    //     $jsonData = json_encode($json);
    //     // print_r($json) ;
    //     file_put_contents('C:\xampp\htdocs\users.json', $jsonData);
    //     echo "new user inserted";
    // }
} else {
    echo "invalid request";
}
