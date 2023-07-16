import "../css/style-header.css"
import HeaderComponent from "./componentes/HeaderComponent";
//Este componente unifica el logo de la pagina y el componente Header
//Los routers estan en el componente DivPrincipals
function Header(){
    return(
        <div class="headerCSS">         
        <div class="headerLogo">
            <h1>Hotel Lotus</h1>
        </div>
        <HeaderComponent/>

    </div>  

    )
}

export default Header;