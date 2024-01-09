

function FormReserva(){
return(
    <div>
        <form action="../../php/procesar.php" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre"></input>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required></input>
        <input type="submit" value="Enviar"></input>
        </form>
    </div>

)

}


export default FormReserva;