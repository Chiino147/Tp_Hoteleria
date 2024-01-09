import { AiFillLinkedin } from "react-icons/ai"; //Linkelind Icon
import { AiOutlineGithub } from "react-icons/ai"; //Github Icon
import "../pages/style-footer.css"

//Componente que SOLO contiene el footer

function FooterComponent(){
    return(
        <div class="footer">
            <div class="footer-info">
                <p>Hotel Lotus</p>
                <p>Carlos Spegazzini 450, C1230 CABA</p>
                <p>+54 11111111</p>
                <p>martinfer17@hotmail.com</p>
            </div>
            <div class="footer-links">
                <a target="_blank" href="https://www.linkedin.com/in/martin-fernandez-1b1965220/"><AiFillLinkedin/></a>
                <a target="_blank" href="https://www.linkedin.com/in/martin-fernandez-1b1965220/"><AiOutlineGithub/></a>
            </div>
   
        </div>
    )


}

export default FooterComponent;