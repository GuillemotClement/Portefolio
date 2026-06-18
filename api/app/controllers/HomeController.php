<?php

namespace Gizmo\Api\controllers;

use Flight;
use Gizmo\Api\services\AuthService;

class HomeController
{
    public function __construct(
        // injection de dépendance => permet d'utiliser la classe directement dans les controllers
        // doit etre instancier et passer dans route.php pour pouvoir etre ensuite utilisable dans le controller
        private AuthService $authService
    ){}

    public function homepage(){
        if($this->authService->isLogged()){
            Flight::view()->render('home.latte', ['title' => 'Home']);
        }else{
            Flight::redirect('/login');
        }
    }
}