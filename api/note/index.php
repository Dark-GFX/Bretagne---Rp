<?php 
  $json = json_encode([
    'type' => 'error',
    'message' => 'Endpoint not found',
    'next' => false,
    "data" => []
  ]);

  header('Content-Type: application/json');
  echo $json;
?>