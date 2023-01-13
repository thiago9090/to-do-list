import "./App.css";
import bestsellerLogo from "./imagenes/bestseller-logo.png";
import Tarea from "./componentes/Tarea";
import TareaFormulario from "./componentes/TareaFormulario";
import ListaDeTareas from "./componentes/ListaDeTareas";
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="bestseller-logo-contenedor">
        <img src={bestsellerLogo} className="bestseller-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Tareas</h1>

        <ListaDeTareas></ListaDeTareas>
      </div>
    </div>
  );
}

export default App;
