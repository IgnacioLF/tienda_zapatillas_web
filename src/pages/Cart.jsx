/* eslint-disable camelcase */
import { SpringHost } from "../constants/constants";
import RedButton from "../components/RedButton";
import OutlineButton from "../components/OutlineButton";
import PurpleButton from "../components/PurpleButton";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import { obtenerCarrito } from "../api/ServicioWebCarrito_Spring";
import emptyCart from "../assets/emptyCart.png";

const Cart = () => {
  const navigate = useNavigate();
  const { userId } = useContext(userContext);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    if (userId === "") {
      navigate("/");
    } else if (userId !== null && userId !== undefined) {
      const getCarrito = async () => {
        const res = await obtenerCarrito(userId);
        setCartData(res);
      };
      getCarrito();
    }
  }, [userId]);

  const handleOnClickSeguirComprando = () => {
    navigate("/tienda");
  };

  const handleOnClickCheckout = () => {
    if (cartData.length > 0 && cartData !== null) {
      navigate("/checkout");
    }
  };

  if (cartData && cartData.length === 0) {
    return (
      <div className="w-full flex flex-col items-center min-h-[71vh]">
        <div
          id="purple_blur_top_left"
          className="absolute z-[0] top-[0%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
        />
        <div
          id="cyan_blur_top_right"
          className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <div
          id="cyan_blur_middle_left"
          className="absolute z-[0] left-[-10%] top-[82%] bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
        />
        <p className="text-white text-[1.5rem] mt-10 mb-5">
          El carrito esta vacio, puedes añadir productos en nuestra tienda
        </p>
        <img src={emptyCart} className="w-[35rem] h-[30rem]" />
      </div>
    );
  }

  return (
    <div className="text-white flex justify-center">
      <div
        id="purple_blur_top_left"
        className="absolute z-[0] top-[0%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div
        id="cyan_blur_top_right"
        className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <div
        id="cyan_blur_middle_left"
        className="absolute z-[0] left-[-10%] top-[82%] bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <div className="max-w-[60%] w-full min-h-[71vh] mt-2">
        <table className="w-full rounded-lg m-5 mx-auto text-gray-100 bg-gradient-to-r from-[#2b1046] to-[#003741] text-[1.2rem]">
          <thead>
            <tr className="text-center border-b-2 border-indigo-300">
              <th className="px-4 py-3">Foto</th>
              <th className="px-4 py-3">Modelo</th>
              <th className="px-4 py-3">Cantidad</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cartData &&
              cartData.map((cartItem, index) => {
                const { cantidad, modelo, precio, zapatilla_id } = cartItem;
                let rowStyles = "border-b border-indigo-400 text-center";
                if (index === cartData.length - 1) {
                  rowStyles = "rounded-b-lg text-center";
                }

                return (
                  <tr key={index} className={rowStyles}>
                    <td className="px-4 py-3 flex items-center justify-center">
                      <img
                        src={`${SpringHost}/subidas/${zapatilla_id}.png`}
                        className="h-[100px] w-[100px]"
                      />
                    </td>
                    <td className="px-4 py-3">{modelo}</td>
                    <td className="px-4 py-3 text-gray-900">
                      <input
                        type={"number"}
                        className="w-[5rem] text-center py-2 px-1 rounded-xl font-semibold"
                        value={cantidad}
                      />
                    </td>
                    <td className="px-4 py-3">{precio}$</td>
                    <td className="px-4 py-3">
                      <RedButton Click={() => alert("TODO")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={4}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </RedButton>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="w-full flex justify-evenly mt-10 text-[1.7rem] mb-10">
          <OutlineButton
            Click={handleOnClickSeguirComprando}
            styles={"font-bold "}
          >
            Seguir comprando
          </OutlineButton>
          <PurpleButton Click={handleOnClickCheckout} styles={"font-bold"}>
            Realizar pedido
          </PurpleButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
