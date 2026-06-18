<?php

namespace Gizmo\Api\services;

use Gizmo\Api\repository\UserRepository;

class AuthService
{
    public function __construct(
        private UserRepository $userRepository
    ){}
    public function isLogged(): bool{
        if(!isset($_SESSION['isLogged'])){
            return false;
        }

        return $_SESSION['isLogged'];
    }

    public function checkCredentials($data): bool {

        $username = $data['username'];
        $password = $data['password'];

        //TODO: add check value






        return false;
    }
}