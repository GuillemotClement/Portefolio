<?php

// Permet l'affichage des messages d'erreurs
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();


require_once __DIR__ . "/../vendor/autoload.php";

use Latte\Engine;

Flight::register('view', Engine::class, [], function($latte){
    $latte->setTempDirectory(__DIR__ . '/../cache/');
    $latte->setLoader(new \Latte\Loaders\FileLoader(__DIR__. '/../app/views/'));
});

require '../app/config/routes.php';

// Debug flight
Flight::set('flight.debug', true);

Flight::start();