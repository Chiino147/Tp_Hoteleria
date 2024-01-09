import DivPresentacion from "../../Presentacion/pages/DivPresentacion"
import FooterReact from "../../footer/Componets/FooterComponent"
import PresentacionComponente from "../../Presentacion/Componets/PresentacionComponente"
import CardCuarto from "../components/CardCuarto";

//Componente para imprimir toda la pagina de los cuartos

function Cuartos(){
return(

    <div>
        <DivPresentacion
        fondo="cuartos"
        />
        
        <PresentacionComponente
        titulo="Habitaciones y tarifas"
        descripcion="Cada una de nuestras habitaciones luminosas e inundadas de luz viene con todo lo que pueda necesitar para una estancia confortable. Y sí, la comodidad no es nuestro único objetivo, también valoramos el buen diseño, el elegante mobiliario contemporáneo complementado con los ricos tonos de la paleta de la naturaleza, visibles desde las ventanas y terrazas con vista al mar de nuestras habitaciones."
        />

        <CardCuarto
        tipo="Suite Azul del Horizonte"
        costo="100"
        foto1="azul1"
        foto2="azul2"
        foto3="azul3"
        />

        <CardCuarto
        tipo="Habitación Oceánica"
        costo="100"
        foto1="horizonte1"
        foto2="horizonte2"
        foto3="horizonte3"
        />

        <CardCuarto
        tipo="Villa Marítima"
        costo="100"
        foto1="maritima1"
        foto2="maritima2"
        foto3="maritima3"
        />  
        
        <FooterReact/>
    </div>


)

}

export default Cuartos;