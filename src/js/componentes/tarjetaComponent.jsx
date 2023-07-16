import Button from 'react-bootstrap/Button';
import "../../css/style-tarjeta.css"


//Componente que SOLO contiene la Tarjeta

function Tarjeta({titulo,texto,foto}){
    return(
        <div className="tarjeta">
            <div className="tarjetaDivTexto">
                <h3>{titulo}</h3>
                <p>{texto}</p>
            <Button variant="warning">EXPLORAR</Button>{' '}
            </div>
            <div className="tarjetaDivFoto">
                <img src={require(`../../img/${foto}.jpg`)} alt="" className="tarjetaFoto" />
            </div>
        </div>

    )
}

export default Tarjeta;