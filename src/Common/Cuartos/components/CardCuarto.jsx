import Carousel from 'react-bootstrap/Carousel';
import "../pages/style-cuartos.css"
import Button from 'react-bootstrap/Button';
import { Route,Routes,Link } from 'react-router-dom';

//Este componente contiene SOLO las tarjetas de los cuartos

function CardCuarto({tipo,costo,foto1,foto2,foto3}){
return(
    <div class="style-card-cuarto">
     <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../../img/${foto1}.jpg`)}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../../img/${foto2}.jpg`)}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../../img/${foto3}.jpg`)}
          alt="First slide"
        />
      </Carousel.Item>
     /</Carousel>
     <div class="style-card-cuarto-descripcion">
        <h3>{tipo}</h3>
        <div class="style-cuartos-descripcion-botones">
          
            <Link to="/reservar">
              Reserva!
            </Link>   
                 
        </div>
     </div>


    </div>


)

}


export default CardCuarto