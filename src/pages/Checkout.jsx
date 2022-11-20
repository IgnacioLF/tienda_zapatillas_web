import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { obtenerCarrito } from "../api/ServicioWebCarrito_Spring";

const Checkout = () => {
  const navigate = useNavigate();
  const { userId } = useContext(userContext);
  const [pasoCheckout, setPasoCheckout] = useState(1);

  useEffect(() => {
    if (userId === "") {
      navigate("/");
    } else if (userId !== null && userId !== undefined) {
      const checkCartAndUser = async () => {
        const res = await obtenerCarrito(userId);
        const carrito = res;
        if (carrito === null || carrito.length <= 0) {
          navigate("/");
        }
      };
      checkCartAndUser();
    }
  }, [userId]);

  if (pasoCheckout === 1) {
    return <div className="text-white">Paso 1</div>;
  }
  if (pasoCheckout === 2) {
    return <div className="text-white">Paso 2</div>;
  }
  if (pasoCheckout === 3) {
    return <div className="text-white">Paso 3</div>;
  }
  // TODO check
  return <div className="text-white">Esto es el Checkout</div>;
};

export default Checkout;
