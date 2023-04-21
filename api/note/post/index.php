<?php
  header('Content-Type: application/json');

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        // Récupération du corps de la requête
        $body = file_get_contents('php://input');
        $data = json_decode($body, true);
        
        // Récupération du nombre à ajouter
        $nbToAdd = $data['number'];
        
        // Lecture du fichier etoile.json
        $etoiles = json_decode(file_get_contents("./../../../etoile.json"), true);
        
        // Ajout du nombre au tableau $etoiles
        array_push($etoiles, $nbToAdd);
        
        // Réécriture du fichier etoile.json
        file_put_contents("./../../../etoile.json", json_encode($etoiles));
        
        // Réponse à la requête
        echo json_encode([
            "type"=>"success",
            "message"=>"Nombre ajouté",
            "next"=>true,
            "data"=>[]
        ]);
    }else {
        echo json_encode([
            "type"=>"error",
            "message"=>"Metode invalide",
            "next"=>false,
            "data"=>[]
        ]);
    }

        

?>