import PurpleButton from "./PurpleButton";
import { SpringHost } from "../constants/constants";
import { confirmarPedido } from "../api/ServicioWebPedidos_Spring";
import { useContext, useState } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
import ErrorDiv from "./ErrorDiv";

/* eslint-disable camelcase */
const ResumenPedido = ({ pedidoData }) => {
  const navigate = useNavigate();
  const { userId } = useContext(userContext);
  const [confirmError, setConfirmError] = useState(null);
  const {
    nombreCompleto,
    ciudad,
    cp,
    detalles_envio,
    direccion,
    numeroTarjeta,
    provincia,
    titularTarjeta,
    zapatillas,
  } = pedidoData;

  const handloOnClickConfirmar = async () => {
    const response = await confirmarPedido(userId);
    if (!response.includes("ok")) {
      setConfirmError(
        "Ha ocurrido un problema al realizar la operacion intentelo de nuevo"
      );
      return;
    }
    // TODO custom popup
    alert("pedido realizado");
    navigate("/");
  };

  return (
    <div className="rounded-xl mx-auto w- max-w-[60rem] flex flex-col items-center">
      <h1 className="text-[2rem] font-bold text-center">Resumen del Pedido</h1>
      <table className="w-full rounded-lg m-5 mx-auto text-gray-100 bg-gradient-to-r from-[#2b1046] to-[#003741] text-[1rem]">
        <thead>
          <tr className="text-center border-b-2 border-indigo-300">
            <th className="px-4 py-3">Foto</th>
            <th className="px-4 py-3">Modelo</th>
            <th className="px-4 py-3">Cantidad</th>
            <th className="px-4 py-3">Precio</th>
          </tr>
        </thead>
        <tbody>
          {zapatillas &&
            zapatillas.map((zapatilla, index) => {
              const { cantidad, modelo, precio, zapatilla_id } = zapatilla;
              let rowStyles = "border-b border-indigo-400 text-center";
              if (index === zapatillas.length - 1) {
                rowStyles = "rounded-b-lg text-center";
              }

              return (
                <tr key={index} className={rowStyles}>
                  <td className="px-4 py-3 flex items-center justify-center">
                    <img
                      src={`${SpringHost}/subidas/${zapatilla_id}.png`}
                      className="h-[60px] w-[60px]"
                      alt="imagen de zapatilla"
                    />
                  </td>
                  <td className="px-4 py-3">{modelo}</td>
                  <td className="px-4 py-3">{cantidad}</td>
                  <td className="px-4 py-3">{precio}$</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="p-2 bg-black-gradient-2 rounded-lg text-[1.2rem] mb-5 w-full">
        <h2 className="text-[1.5rem] font-bold text-center mb-4 mt-2">
          Detalles del pedido
        </h2>
        <div className="flex mx-10 py-4 font-semibold">
          <p className="mr-10">
            Nombre :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {nombreCompleto}
            </span>
          </p>
          <p className="">
            Direccion :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {direccion}
            </span>
          </p>
        </div>
        <div className="flex mx-10 py-4 font-semibold mb-2">
          <p className="mr-10">
            Provincia :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {provincia}
            </span>
          </p>
          <p className="mr-10">
            Ciudad :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {ciudad}
            </span>
          </p>
          <p>
            Codigo postal :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {cp}
            </span>
          </p>
        </div>
      </div>
      <div className="p-2 bg-black-gradient-2 rounded-lg text-[1.2rem] mb-5 w-full">
        <h2 className="text-[1.5rem] font-bold text-center mb-4 mt-2">
          Detalles del pago
        </h2>
        <div className="flex mx-10 py-4 font-semibold mb-2">
          <p className="mr-10">
            Titular de la tarjeta :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {titularTarjeta}
            </span>
          </p>
          <p>
            Numero de la tarjeta :{" "}
            <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
              {numeroTarjeta}
            </span>
          </p>
        </div>
      </div>
      <div className="p-2 bg-black-gradient-2 rounded-lg text-[1.2rem] w-full">
        <h2 className="text-[1.5rem] font-bold text-center mb-4 mt-2">
          Detalles del transporte
        </h2>
        <p className="font-semibold mx-10 py-4 mb-2">
          Detalles del envio :{" "}
          <span className="p-2 font-normal rounded-xl bg-gradient-to-r from-gray-500 to-gray-700">
            {detalles_envio}
          </span>
        </p>
      </div>
      {confirmError && <ErrorDiv message={confirmError} styles={"mt-2"} />}
      <PurpleButton
        styles={"my-7 text-[2rem] font-bold"}
        Click={handloOnClickConfirmar}
      >
        Confirmar pedido
      </PurpleButton>
    </div>
  );
};

export default ResumenPedido;
