import PurpleButton from "../components/PurpleButton";
import zapatilla1 from "../assets/zapatilla1.png";
import zapatillaCaja from "../assets/zapatillas-caja.png";
import SliderCard from "../components/SliderCard";
import { useEffect, useState } from "react";
import { obtenerUltimasZapatillas } from "../api/ServicioZapatillas_Spring";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [ultimasZapatillas, setUltimasZapatillas] = useState();
  const [finalSlider, setFinalSlider] = useState(4);
  const [principioSlider, setPrincipioSLider] = useState(1);

  useEffect(() => {
    const getUltimasZapatillas = async () => {
      const res = await obtenerUltimasZapatillas();
      setUltimasZapatillas(res);
    };
    getUltimasZapatillas();
  }, []);

  const handleNextSlider = () => {
    if (finalSlider === 8) {
      setFinalSlider(1);
    } else {
      setFinalSlider(finalSlider + 1);
    }

    if (principioSlider === 8) {
      setPrincipioSLider(1);
    } else {
      setPrincipioSLider(principioSlider + 1);
    }
  };

  const handleBackSlider = () => {
    if (finalSlider === 1) {
      setFinalSlider(8);
    } else {
      setFinalSlider(finalSlider - 1);
    }

    if (principioSlider === 1) {
      setPrincipioSLider(8);
    } else {
      setPrincipioSLider(principioSlider - 1);
    }
  };

  const handleClickComprarlasYa = () => {
    navigate("/tienda");
  };

  return (
    <div className="text-white">
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
            Click={handleClickComprarlasYa}
          >
            Compralas Ya
          </PurpleButton>
        </div>
        <div className="">
          <img
            src={zapatilla1}
            className="h-[35rem] rotate-17"
            alt="imagen zapatilla"
          />
        </div>
      </section>
      <section
        id="ultimos_productos"
        className="flex mx-[10rem] justify-center mb-[5rem] "
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
                onClick={handleBackSlider}
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
                onClick={handleNextSlider}
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
                const pos = index + 1;
                let retrunCard = false;
                if (principioSlider >= 6) {
                  if (
                    (pos >= principioSlider && pos <= 8) ||
                    pos <= finalSlider
                  ) {
                    retrunCard = true;
                  }
                } else if (pos >= principioSlider && pos <= finalSlider) {
                  retrunCard = true;
                }
                if (!retrunCard) return null;
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
      <section
        id="detalles_productos"
        className="flex mx-[10rem] justify-center mb-10"
      >
        <div className="flex mx-[10rem] justify-center">
          <div className=" flex flex-col justify-center max-w-[26rem]">
            <span className="text-cyan-500 text-[1rem]">
              Nuestros productos
            </span>
            <h2 className="font-bold text-white text-[2.6rem] leading-[1.2] mt-2">
              Conoce la{" "}
              <span className="font-bold text-transparent bg-clip-text bg- bg-gradient-to-r from-purple-600 to-[#665DE2]">
                calidad
              </span>{" "}
              de nuestras zapatillas
            </h2>
            <p className="mt-3 text-gray-400">
              Las zapatillas que ofrecemos son de una calidad premiun que nos
              ofrecen las mejores marcas del mercado.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <div className="h-fit mr-4 rounded-lg p-2 bg-gradient-to-r from-purple-600 to-cyan-500 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[2.8rem] h-[2.8rem]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Mejores marcas</h3>
                <p className="leading-[1.2] text-gray-400">
                  Tenemos las mejores marcas para poder ofrecer una caldiad
                  premiun.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <div className="h-fit mr-4 rounded-lg p-2 bg-gradient-to-r from-purple-600 to-cyan-500 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[2.8rem] h-[2.8rem]"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Mejores precios</h3>
                <p className="leading-[1.2] text-gray-400">
                  Ofrecemos las zapatillas a los precios mas competitivos del
                  mercado.
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-[34.5rem] flex flex-col justify-center items-center">
            <div className="ml-[3.5rem]">
              <div className="p-[2rem] rounded-t-3xl h-fit bg-gradient-to-r from-[#2b1046] to-[#003741]">
                <img
                  src={zapatillaCaja}
                  className="h-[15rem]"
                  alt="imagen zapatilla"
                />
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 pb-3 rounded-b-3xl">
                <h3 className="mx-4 font-semibold pt-2 text-[1.6rem]">
                  Nike Watch Series 7
                </h3>
                <div className="flex justify-between mx-4 font-semibold ">
                  <span className="text-[1.5rem]">50.20$</span>
                  <a
                    onClick={() => alert("TODO")}
                    className="text-[1.2rem] font-semibold rounded-lg px-1 py-[0.1rem] bg-purple-500 border-2 bg-origin-border border-transparent hover:border-2 hover:border-white hover:text-gray-300"
                  >
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
