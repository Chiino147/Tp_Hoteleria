import "./style-header.css"
import HeaderComponent from "./Componets/HeaderComponent";
//Este componente unifica el logo de la pagina y el componente Header
//Los routers estan en el componente DivPrincipals
function Header(){
    return(
        <div class="headerCSS">         
        <div class="headerLogo">
            <h2 class="headerH2" >Hoteles</h2>
            <h1 class="headerH1">LOTUS</h1>
        </div>
        <HeaderComponent/>

    </div>  

    )
}

export default Header;