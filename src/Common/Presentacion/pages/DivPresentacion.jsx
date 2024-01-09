import "../../../css/indexInicio.css"
import Header from "../../header/Header"
import "../../Principal/pages/style-principal.css"
//Este Componente crea la primera parte del HTML (Header y presentacion de la pagina).


function DivPresentacion({fondo}){
    let claseCss = ElegirEstiloCss(fondo)  

    return(
        <div class={claseCss}>
        <Header/>
            <div class="divSecundario">
                <div class="titulo">
                    <h2 class="secH2">Bienvenido al</h2>
                    <h1 class="secH1">LOTUS</h1>
                    <h2 class="secH2">Hoteles</h2>
                </div>
                <div class="extra">
                    <p class="secp">Reserva tu estancia y disfruta del Lujo redefinido a las tarifas más asequibles.</p>
                </div>
        
            
            </div>

         </div>
    )
}




//Con esta funcion cambiamos el background de la pagina presenacion

function ElegirEstiloCss(fondo){
    let estiloCss = "";
    switch(fondo){
        case "home":
            estiloCss = "divPrincipalHome"   
        break;
        case "instalaciones":
            estiloCss = "divPrincipalInstalaciones"
            break;
        case "cuartos":
            estiloCss = "divPrincipalCuartos"
            break;
        case "contacto":
            estiloCss = "divPrincipalContacto"
            break;
    }

    return estiloCss
}

export default DivPresentacion;