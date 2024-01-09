import DivPresentacion from "../Presentacion/pages/DivPresentacion";
import FooterReact from "../footer/pages/FooterReact";
import Tarjeta from "../Componentes/tarjetaComponent";

function Home(){
return(
    <div>
        <DivPresentacion
        fondo="home"/>
        <p class="terp">Todos nuestros tipos de habitaciones incluyen desayuno gratuito.</p>
        <Tarjeta
            titulo="Comodidad asegurada"
            texto="Nuestras habitaciones están diseñadas para transportarte a un entorno hecho para el ocio. Deja de pensar en el día a día de la vida hogareña y encuentra un paraíso privado para ti."
            foto="maritima1"
        />
        <Tarjeta
            titulo="Disfruta la playa"
            texto="Nos encanta la vida en la playa. Estar cerca del océano con acceso a una interminable playa de arena garantiza un estado mental relajado. Parece que el tiempo se detiene mirando el océano."
            foto="fotoHome2"
        />
        <FooterReact/>
    </div>
)
}

export default Home;