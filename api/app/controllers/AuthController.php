<?php

namespace Gizmo\Api\controllers;

use Flight;
use Gizmo\Api\bin\Utils;

class AuthController
{
    public function __construct()
    {

    }

    public function logout(){
        session_unset();
        session_destroy();

        Flight::redirect('/');
    }
    public function login(){
        $request = Flight::request();

        $method = $request->method;

        if($method === "GET"){
            Flight::view()->render('login.latte', ['title' => 'Connexion']);
        }

        if($method === "POST"){
            $data = $request->data;




        }
    }
}