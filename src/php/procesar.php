<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];

    // Aquí puedes realizar cualquier acción con los datos recibidos, como guardarlos en una base de datos o enviar un correo electrónico.

    // Ejemplo de salida de los datos recibidos
    echo "Nombre: " . $nombre . "<br>";
    echo "Email: " . $email . "<br>";
}
?>