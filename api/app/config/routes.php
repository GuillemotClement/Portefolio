<?php


use Gizmo\Api\bin\DB;
use Gizmo\Api\bin\Utils;
use Gizmo\Api\controllers\AuthController;
use Gizmo\Api\controllers\HomeController;
use Gizmo\Api\services\AuthService;

$authService = new AuthService();

$homeController = new HomeController($authService);
$authController = new AuthController();

// HOMEPAGE
Flight::route('GET /', [$homeController, 'homepage']);

// AUTH
Flight::route("GET /logout", [$authController, 'logout']);

Flight::route("/login", [$authController, "login"]);


//
//Flight::route('POST /login', function(){
//    $request = Flight::request();
//    $data = $request->data;
//
//
//    $username = $data['username'];
//    $password = $data['password'];
//
////    $errors = [];
////
////    if(empty($username) || empty($password)){
////        $errors['invalid'] = 'donnée invalide';
////    }
////
////    if(count($errors) == 0){
////        return $errors;
////    }
//
//    $sql = "SELECT username, password FROM users WHERE username = :username";
//    $vars = [":username" => $username];
//
//    $data = DB::getOne($sql, $vars);
//
//    if(!isset($data->username)){
//        Flight::view()->render('login.latte', [
//            'title' => 'connexion',
//            'errors' => 'invalide credential'
//        ]);
//        return;
//    }
//
//
//
//    if($password === $data->password){
//        $_SESSION['username'] = $username;
//        $_SESSION['isLogged'] = true;
//
//        Flight::redirect('/');
//    }else{
//        Flight::view()->render('login.latte', [
//            'title' => 'connexion',
//            'errors' => 'invalide credential'
//        ]);
//    }
//
//});

// REGISTER
Flight::route('GET /register', function(){
    Flight::view()->render('register.latte', ['title' => 'Inscription']);
});

Flight::route('POST /register', function(){
    $request = Flight::request();
    $data = $request->data;

    $username = $data['username'];
    $password = $data['password'];
    $confirmPassword = $data['confirmPassword'];

    if($password !== $confirmPassword){
        return "failed";
    }

    $sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
    $vars = [
        ":username" => $username,
        ":password" => $password,
    ];

//    try {
        DB::query($sql,$vars);
//    }

    Flight::redirect('/');
});