import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerZapatillaPorId } from "../api/ServicioZapatillas_Spring";
import { SpringHost } from "../constants/constants";
import PurpleButton from "../components/PurpleButton";
import InputLabel from "../components/InputLabel";
import ErrorDiv from "../components/ErrorDiv";
import { userContext } from "../App";
import { agregarZapatillaCarrito } from "../api/ServicioWebCarrito_Spring";

const ZapatillaDetalles = () => {
  const { userId } = useContext(userContext);

  const { zapatillaID } = useParams();
  const [zapatilla, setZapatilla] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [errorCantidad, setErrorCantidad] = useState(null);
  const [notLoggedError, setNotLoggedError] = useState(null);

  useEffect(() => {
    const obtenerZapatilla = async () => {
      const zapatillaById = await obtenerZapatillaPorId(zapatillaID);
      if (!zapatillaById) console.log("error obteniendo zapatilla");
      setZapatilla(zapatillaById);
    };
    obtenerZapatilla();
  }, []);

  const handleOnChangeCantidad = (e) => {
    setCantidad(e.target.value);
  };

  const handleClickAddToCart = async () => {
    setErrorCantidad(null);
    setNotLoggedError(null);

    if (cantidad < 1 || cantidad > 100) {
      setErrorCantidad("La cantidad introduccida no es valida");
    } else if (!userId) {
      setNotLoggedError("Debes estar logeado para poder comprar");
    }
    const response = await agregarZapatillaCarrito(
      zapatillaID,
      cantidad,
      userId
    );
    if (!response.ok) {
      console.log("error adding product to cart");
    }
    console.log("respuesta : ", response);
    // TODO popup y redirect
  };

  if (!zapatilla) return <div>Cargando...</div>;

  return (
    <div className="text-white flex justify-center my-[6.5rem]">
      <div
        id="purple_blur_top_left"
        className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div
        id="cyan_blur_top_left"
        className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <div className="flex justify-center items-center bg-opacity-100 bg-gradient-to-r from-[#2b1046] to-[#003741] rounded-l-3xl max-h-[40rem]">
        <img
          className="lg:w-[30rem] lg:h-[30rem] h-[20rem] w-[20rem] mb-2"
          alt="imagen zapatilla"
          src={`${SpringHost}/subidas/${zapatilla.id}.png`}
        />
      </div>
      <div className="lg:min-w-[25rem] min-w-[15rem] flex flex-col items-center justify-evenly bg-black-gradient-2 rounded-r-3xl">
        <h1 className="font-bold text-[3rem]">{zapatilla.modelo}</h1>
        <div className="text-[1.3rem] text-gray-300">
          <p>color : {zapatilla.color}</p>
          <p>marca : {zapatilla.marca}</p>
          <p>talla : {zapatilla.talla}</p>
          <p>sexo : {zapatilla.sexo}</p>
        </div>
        <h2 className="font-semibold text-[2rem]">{zapatilla.precio}$</h2>
        <InputLabel
          label={"Cantidad"}
          inputType={"number"}
          inputValue={cantidad}
          inputOnChange={handleOnChangeCantidad}
          errorform={errorCantidad ? true : null}
        />
        {errorCantidad ? (
          <ErrorDiv styles={"text-[0.8rem]"} message={errorCantidad} />
        ) : null}
        {notLoggedError ? (
          <ErrorDiv styles={"text-[0.8rem]"} message={notLoggedError} />
        ) : null}
        <PurpleButton
          type={"button"}
          styles={"font-bold text-[1.7rem] w-fit mb-5 mt-3"}
          Click={handleClickAddToCart}
        >
          Comprar
        </PurpleButton>
      </div>
    </div>
  );
};

export default ZapatillaDetalles;
