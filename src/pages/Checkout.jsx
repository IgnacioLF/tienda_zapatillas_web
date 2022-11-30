/* eslint-disable camelcase */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { obtenerCarrito } from "../api/ServicioWebCarrito_Spring";
import CheckoutPaso1 from "../components/CheckoutPaso1";
import CheckoutPaso2 from "../components/CheckoutPaso2";
import CheckoutPaso3 from "../components/CheckoutPaso3";
import ResumenPedido from "../components/ResumenPedido";
import CheckOutProgres_Paso1 from "../assets/checkout_Paso1.png";
import CheckOutProgres_Paso2 from "../assets/checkout_Paso2.png";
import CheckOutProgres_Paso3 from "../assets/checkout_Paso3.png";

const Checkout = () => {
  const navigate = useNavigate();
  const { userId } = useContext(userContext);
  const [pasoCheckout, setPasoCheckout] = useState(1);
  const [resumenPedido, setResumenPedido] = useState(null);

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
    return (
      <div className="text-white min-h-[68vh]">
        <div
          id="purple_blur_top_left"
          className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
        />
        <div
          id="cyan_blur_top_left"
          className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <img
          src={CheckOutProgres_Paso1}
          className="h-[7rem] m-auto pl-6"
          alt="progreso paso1"
        />
        <CheckoutPaso1 goToPaso2={() => setPasoCheckout(2)} />
      </div>
    );
  }
  if (pasoCheckout === 2) {
    return (
      <div className="text-white min-h-[72vh]">
        <div
          id="purple_blur_top_left"
          className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
        />
        <div
          id="cyan_blur_top_left"
          className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <img
          src={CheckOutProgres_Paso2}
          className="h-[7rem] m-auto pl-6"
          alt="progreso paso2"
        />
        <CheckoutPaso2 goToPaso3={() => setPasoCheckout(3)} />
      </div>
    );
  }
  if (pasoCheckout === 3) {
    return (
      <div className="text-white min-h-[72vh]">
        <div
          id="purple_blur_top_left"
          className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
        />
        <div
          id="cyan_blur_top_left"
          className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <img
          src={CheckOutProgres_Paso3}
          className="h-[7rem] m-auto pl-6"
          alt="progreso paso 3"
        />
        <CheckoutPaso3
          goToDetallesPedido={(resumen) => {
            setResumenPedido(resumen);
            setPasoCheckout(4);
          }}
        />
      </div>
    );
  }

  console.log("resumen pedido ", resumenPedido);

  if (pasoCheckout === 4) {
    return (
      <div className="text-white min-h-[68vh] mx-[10rem]">
        <div
          id="purple_blur_top_left"
          className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
        />
        <div
          id="cyan_blur_top_left"
          className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <div
          id="cyan_blur_middle_left"
          className="absolute z-[0] left-[-10%] top-[82%] bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <ResumenPedido pedidoData={resumenPedido} />
      </div>
    );
  }
};

export default Checkout;
