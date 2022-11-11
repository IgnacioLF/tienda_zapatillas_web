import PurpleButton from "../components/PurpleButton";
import zapatilla1 from "../assets/zapatilla1.png";
import SliderCard from "../components/SliderCard";
import { useEffect, useState } from "react";
import { obtenerZapatillas } from "../api/ServicioZapatillas_Spring";

const HomePage = () => {
  const [ultimasZapatillas, setUltimasZapatillas] = useState();
  useEffect(() => {
    const getUltimasZapatillas = async () => {
      const res = await obtenerZapatillas();
      setUltimasZapatillas(res);
    };
    getUltimasZapatillas();
  }, []);

  return (
    <div className="text-white">
      <div
        id="purple_blur_top_left"
        className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div
        id="cyan_blur_top_left"
        className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <section id="nueva_coleccion" className="flex mx-[10rem] justify-center">
        <div className="mr-6 flex flex-col justify-center mt-4 max-w-[25rem]">
          <h1 className="font-bold text-white text-[4rem] leading-[1.2]">
            Colección
          </h1>
          <h1 className="font-bold text-white text-[4rem] leading-[1.2]">
            Deportiva
          </h1>
          <h1 className="font-bold text-transparent text-[4rem] leading-[1.15] bg-clip-text bg- bg-gradient-to-r from-purple-600 to-cyan-500">
            2023
          </h1>
          <p className="text-[1.2rem] my-4">
            Nuevas zapatillas con mayor poder, mejor proteccion. Siente el mundo
            en tus pies.
          </p>
          <PurpleButton
            type={"button"}
            styles="w-fit mt-5 mb-6 text-[1.5rem] font-semibold"
          >
            Compralas Ya
          </PurpleButton>
        </div>
        <div className="">
          <img src={zapatilla1} className="h-[35rem] rotate-17" />
        </div>
      </section>
      <section
        id="ultimos_productos"
        className="flex mx-[10rem] justify-center mb-10 "
      >
        <div className="w-full flex flex-col max-w-[60.5rem]">
          <div
            className="flex justify-between items-center mb-4
          "
          >
            <h2 className="font-bold text-[3rem]">
              Ultimas{" "}
              <span className="font-bold text-transparent text-[3rem] leading-[1.15] bg-clip-text bg- bg-gradient-to-r from-purple-600 to-[#665DE2]">
                zapatillas
              </span>
            </h2>
            <div className="flex">
              <a
                onClick={() => alert("TODO")}
                className="rounded-lg mr-2 px-2 py-2 bg-gray-600 border-2 bg-origin-border border-transparent hover:border-2 hover:border-white hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </a>
              <a
                onClick={() => alert("TODO")}
                className="rounded-lg px-2 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 border-2 bg-origin-border border-transparent hover:border-2 hover:border-white hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            {ultimasZapatillas &&
              ultimasZapatillas.map((zapatilla, index) => {
                const { id, modelo, precio } = zapatilla;
                return (
                  <SliderCard
                    key={index}
                    idZapatilla={id}
                    modelo={modelo}
                    precio={precio}
                  />
                );
              })}
          </div>
        </div>
      </section>
      {/*       <section
        id="detalles_productos"
        className="flex mx-[10rem] justify-center mb-10"
      >
        <div>
          <div>
            <span>Nuestros productos</span>
            <h2>Conoce la calidad de nuestras zapatillas</h2>
            <p>
              Las zapatillas que ofrecemos son de una calidad premiun , que nos
              ofrecen las mejores marcas del mercado
            </p>
            <div></div>
            <div></div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
