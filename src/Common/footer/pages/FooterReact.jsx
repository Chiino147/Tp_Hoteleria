import FooterComponent from "../Componets/FooterComponent";
import Testimonios from "../Componets/testimonioComponent"

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