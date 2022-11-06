import PurpleButton from "../components/PurpleButton";
import zapatilla1 from "../assets/zapatilla1.png";

const HomePage = () => {
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
            styles="w-fit m-auto mt-5 text-[1.5rem] font-semibold"
          >
            Compralas Ya
          </PurpleButton>
        </div>
        <div className="">
          <img src={zapatilla1} className="h-[35rem] rotate-17" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
