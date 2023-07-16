import "../../css/style-instalaciones.css"

function InstalacionesComponent({foto,texto}) {

  return (
    <div class="style-instalacion">
      <div class="style-instalacion-img">
      <img src={require(`../../img/${foto}.jpg`)} alt="" />
      </div>
      <h3>{texto}</h3>
      

    </div>
  );
}
//src={require(`../../img/${foto}.jpg`)}
export default InstalacionesComponent;