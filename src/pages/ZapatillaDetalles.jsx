import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerZapatillaPorId } from "../api/ServicioZapatillas_Spring";
import { SpringHost } from "../constants/constants";
import PurpleButton from "../components/PurpleButton";
import InputLabel from "../components/InputLabel";

const ZapatillaDetalles = () => {
  const { zapatillaID } = useParams();
  const [zapatilla, setZapatilla] = useState(null);
  const [cantidad, setCantidad] = useState(1);

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
          className="w-[30rem] h-[30rem] mb-2"
          src={`${SpringHost}/subidas/${zapatilla.id}.png`}
        />
      </div>
      <div className="min-w-[25rem] flex flex-col items-center justify-evenly bg-black-gradient-2 rounded-r-3xl">
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
          styles={"mb-3"}
          inputType={"number"}
          inputValue={cantidad}
          inputOnChange={handleOnChangeCantidad}
        />
        <PurpleButton
          type={"button"}
          styles={"font-bold text-[1.7rem] w-fit mb-2"}
          Click={() => alert("TODO")}
        >
          Comprar
        </PurpleButton>
      </div>
    </div>
  );
};

export default ZapatillaDetalles;
