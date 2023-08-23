<?php
    $destino="at75794675@idat.edu.pe";
    $nombres=$_POST["nombres"];
    $correo=$_POST["correo"];
    $comentarios=$_POST["comentarios"];
    $contenido="Nombres y Apellidos: ".$nombres."\nCorreo: ".$correo."\nComentarios: ".$comentarios;

    if(mail($destino, "Mesaje",$contenido));
    echo "<script>alert('Gracias por su Mensaje')</script>";
    echo "<script>window.location.href=('index.html')</script>"

?>
