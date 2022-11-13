import { useEffect, useState } from "react";
import { obtenerZapatillas } from "../api/ServicioZapatillas_Spring";
import ZapatillaCard from "../components/ZapatillaCard";

const Tienda = () => {
  const [zapatillas, setZapatillas] = useState(null);
  useEffect(() => {
    const getZapatillas = async () => {
      const res = await obtenerZapatillas();
      setZapatillas(res);
    };
    getZapatillas();
  }, []);

  console.log("zapatillas ", zapatillas);
  return (
    <div className="text-white flex flex-col justify-center items-center">
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
        className="absolute z-[0] left-[-10%] top-[110%] bottom-0 w-[20%] h-[20%] cyan__gradient rounded-full"
      />
      <div
        id="purple_blur_bottom_left"
        className="absolute z-[0] top-[150%] right-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div
        id="cyan_blur_middle_left"
        className="absolute z-[0] left-[-10%] top-[220%] bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div className="flex items-center justify-center">
        <span className="font-bold text-[2.7rem] mr-5">Buscador</span>
        <div className="flex  h-fit mt-2 text-[2rem] text-gray-900">
          <input
            type={"text"}
            id="buscador"
            name="buscador"
            className="rounded-l-xl pl-2"
          />
          <a
            onClick={() => alert("TODO")}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center px-2 rounded-r-xl text-white hover:text-purple-500 border-2 border-transparent bg-origin-border hover:border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[2rem] h-[2rem]"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 items-center justify-center mr-10 max-w-[60%]">
        {zapatillas &&
          zapatillas.map((zapatilla, index) => {
            const { id, modelo, precio } = zapatilla;
            return (
              <ZapatillaCard
                idZapatilla={id}
                modelo={modelo}
                precio={precio}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Tienda;
