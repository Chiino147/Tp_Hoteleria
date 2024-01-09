import "../pages/style-presentacion.css"


function PresentacionComponente({titulo,descripcion}){
    return(
        <div class="style-presentacion-div">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>


    )



}


export default PresentacionComponente