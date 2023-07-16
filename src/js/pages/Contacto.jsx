import "../../css/style-contacto.css"
import DivPresentacion from "../DivPresentacion"
import Button from 'react-bootstrap/Button';
function enviar(){
    alert("Mensaje Enviado")
}


function Contacto(){
    return(
        <div className="style-div-contacto">
            <DivPresentacion
            fondo="contacto"
            />
            <form action="" class="style-div-contacto-form">
                <label htmlFor="">Name</label>
                <input type="text" class="inputForm" />
                <label for="correo">Correo electrónico:</label>
                <input type="email" id="correo" name="correo" required/>
                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required></input>
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" cols="50" required></textarea>
                <Button onClick={enviar} variant="outline-primary">Enviar</Button>
            </form>
        </div>
        

    )



}

export default Contacto