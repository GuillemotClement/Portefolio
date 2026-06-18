<?php

namespace Gizmo\Api\bin;
class Utils {
  static function p($value){
      echo '<pre style="background: #f5f5f5; padding: 10px;">';
      print_r($value);
      echo '</pre>';
  }
}