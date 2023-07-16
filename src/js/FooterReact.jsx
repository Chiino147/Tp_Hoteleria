import FooterComponent from "./componentes/FooterComponent";
import Testimonios from "./componentes/testimonioComponent"

//Este componente Unifica los testimonios y el footer en un solo componente
function FooterReact(){
    return(
        <div>
            <Testimonios/>
            <FooterComponent/>
        </div>

    )
}


export default FooterReact;