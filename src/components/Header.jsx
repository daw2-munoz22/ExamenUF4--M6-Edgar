import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Login from '../views/Login';
import Register from '../views/Register';
import Panel from '../views/Panel';

export default function Header() {
    return (
        <Router>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Gestión de incidencias FPLLEFIA</Link>
            <div>
              <Link to="/panel" className="btn btn-secondary ms-2">PANEL</Link>
              <Link to="/login" className="btn btn-secondary ms-2">LOGIN</Link>
              <Link to="/registro" className="btn btn-secondary ms-2">REGISTRO</Link>
            </div>
            <div>
              <span>administrador@fpllefia.com</span>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
        
      );
  }