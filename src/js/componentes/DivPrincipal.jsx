import Home from "../pages/Home";
import { Route,Routes } from 'react-router-dom';
import Cuartos from "../pages/Cuartos";
import Instalaciones from "../pages/Instalaciones";
import Contacto from "../pages/Contacto";
import FormReserva from "./FormReserva";

//Routes Almacena todas las rutas y las cambia por Route (Primero hay que envolver la app)

function DivPrincipal(){
    return(
        <div class="DivPrincipal" className="DivPrincipal">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cuartos" element={<Cuartos/>} />
                <Route path="/instalaciones" element={<Instalaciones/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/reservar" element={<FormReserva/>}/>
            </Routes>
            
            
            
            
        </div>
    )


}

export default DivPrincipal;