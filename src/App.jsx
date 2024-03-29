import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Tienda from "./pages/Tienda";
import ZapatillaDetalles from "./pages/ZapatillaDetalles";
import Cookies from "universal-cookie";
import Checkout from "./pages/Checkout";

export const userContext = createContext();

function App() {
  const cookies = new Cookies();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(cookies.get("user"));
  }, []);

  const userData = { userId, setUserId };

  return (
    <div className="App scroll-smooth">
      <userContext.Provider value={userData}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registrarse" element={<Register />} />
          <Route path="/carrito" element={<Cart />} />
          <Route
            path="/zapatilla/:zapatillaID"
            element={<ZapatillaDetalles />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
