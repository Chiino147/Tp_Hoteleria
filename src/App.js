import Tarjeta from "./Common/Componentes/tarjetaComponent";
import "./css/style-carusel.css"
function App() {
  return (
    <div className="App">
      <Tarjeta
      titulo="Comodidad asegurada"
      texto="Nuestras habitaciones están diseñadas para transportarte a un entorno hecho para el ocio. Deja de pensar en el día a día de la vida hogareña y encuentra un paraíso privado para ti."
      foto="fotoHome1"
      />
      <Tarjeta
      titulo="Disfruta la playa"
      texto="Nos encanta la vida en la playa. Estar cerca del océano con acceso a una interminable playa de arena garantiza un estado mental relajado. Parece que el tiempo se detiene mirando el océano."
      foto="fotoHome2"
      />



  </div>
  );
}




export default App;
