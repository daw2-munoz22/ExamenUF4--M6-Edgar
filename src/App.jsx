import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TablaPendientes from "./components/TablaPendientes";
import TablaResueltos from "./components/TablaResueltos";


export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
          <h1>Administración de incidencias</h1>
          <h2>Tickets pendientes</h2>
          <TablaPendientes /> {/* Agrega el componente de tabla de tickets pendientes */}
          <h2>Tickets resueltos</h2>
          <TablaResueltos /> {/* Agrega el componente de tabla de tickets resueltos */}
        </div>
    </div>
  );
}