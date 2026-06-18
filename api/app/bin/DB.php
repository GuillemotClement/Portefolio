<?php

namespace Gizmo\Api\bin;

use Exception;
use PDO;
use PDOException;

class DB
{
    private static $username = "postgres";
    private static $password = "postgres";
    private static $dsn = "pgsql:host=localhost;dbname=portefolio;";

    public static function connect(){
        try{
            $pdo = new PDO(self::$dsn, self::$username, self::$password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(\PDOException $e){
            throw new \Exception("Database connection failed" . $e->getMessage());
        }
        return $pdo;
    }
    public static function select($sql, $binding_values = []){
        try{
            $pdo = self::connect();
            $query = $pdo->prepare($sql);
            $query->execute($binding_values);
            $data = $query->fetchAll(PDO::FETCH_ASSOC);
            $query = null; $pdo = null;	return $data;
        }
        catch(PDOException $e){
            error_log(date('[Y-m-d H:i:s] ') ."SQL Error: " . $e->getMessage() ."\n\r \n\r", 3, "errors.log");
            throw new Exception("Error executing SELECT query." . $e->getMessage());
        }
    }


    public static function query($sql, $binding_values = []){
        try {
            $pdo = self::connect();
            $query = $pdo->prepare($sql);
            $query->execute($binding_values);
            $query = null;
            $pdo = null;
        }catch(\PDOException $e){
            error_log(date('[Y-m-d H:i:s] ') ."SQL Error: " . $e->getMessage() ."\n\r \n\r", 3, "errors.log");
            throw new \Exception("Error executing query" . $e->getMessage());
        }
    }

    public static function getOne($sql, $vars = []){
        try {
            // récupération du PDO
            $pdo = self::connect();

            // préparation de la requête
            $query = $pdo->prepare($sql);
            $query->execute($vars);

            $data = $query->fetch(PDO::FETCH_OBJ);
            return $data;
        }catch(PDOException $e){
            error_log(date('[Y-m-d H:i:s] ') ."SQL Error: " . $e->getMessage() ."\n\r \n\r", 3, "errors.log");
            throw new Exception("Error executing SELECT query." . $e->getMessage());
        }
    }


}
