import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import SobreNosotros from "./pages/SobreNosotros";
import Tienda from "./pages/Tienda";
import ZapatillaDetalles from "./pages/ZapatillaDetalles";

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/sobre_nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/zapatilla/:zapatillaID" element={<ZapatillaDetalles />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
