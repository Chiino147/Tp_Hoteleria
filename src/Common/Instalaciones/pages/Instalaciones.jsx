import InstalacionesComponent from "../Components/InstalacionesComponent";
import PresentacionComponente from "../../Presentacion/Componets/PresentacionComponente";
import DivPresentacion from "../../Presentacion/pages/DivPresentacion";
import FooterReact from "../../footer/pages/FooterReact";

function Instalaciones(){
    return(
        <div>

            <DivPresentacion
            fondo="instalaciones"
            />
            <PresentacionComponente
            titulo="Instalaciones"
            descripcion="Queremos que su estadía en nuestro exuberante hotel sea realmente inolvidable. Es por eso que prestamos especial atención a todas sus necesidades para que podamos asegurar una experiencia única. Los hoteles de lujo ofrecen el entorno perfecto con impresionantes vistas para el ocio y nuestras modernas instalaciones de resort de lujo le ayudarán a disfrutar de lo mejor de todo."
            />

            <InstalacionesComponent
            foto="instalacionGym"
            texto="Gimnacio"
            />
            
            <InstalacionesComponent
            foto="instalacionBar"
            texto="Bar"
            />
            
            <InstalacionesComponent
            foto="instalacionPool"
            texto="Pileta"
            />
           
            <InstalacionesComponent
            foto="instalacionRestaurante"
            texto="Restaurante"
            />
            
            <InstalacionesComponent
            foto="instalacionSpa"
            texto="Spa"
            />
            
            <InstalacionesComponent
            foto="instalacionLavanderia"
            texto="Lavanderia"
            />
            
            <FooterReact/> 
        </div>
    
    
    )
    
    }
    
    export default Instalaciones;