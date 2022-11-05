import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage";
import SobreNosotros from "./pages/SobreNosotros";
import Tienda from "./pages/Tienda";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/sobre_nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
