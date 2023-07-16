import { Link, Outlet } from 'react-router-dom';

//Componente que SOLO contiene el Header

function HeaderNav(){
    return(
    <div class="headerNav">
        <ul class="headerUl">
            <Link class="headerLi" to="/#">Home</Link>
            <Link class="headerLi" to="/Instalaciones">Instalaciones</Link>
            <Link class="headerLi" to="/Cuartos">Cuartos</Link>
            <Link class="headerLi" to="/Contacto">Contactanos</Link>
        </ul>
        <Outlet/>
    </div>)
}

export default HeaderNav