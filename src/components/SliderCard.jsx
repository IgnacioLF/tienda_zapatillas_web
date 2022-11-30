import { useNavigate } from "react-router-dom";
import { SpringHost } from "../constants/constants";

const SliderCard = ({ idZapatilla, modelo, precio }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/zapatilla/${idZapatilla}`);
  };
  return (
    <div className="text-white max-w-[16rem]">
      <div className="flex justify-center items-center bg-opacity-100 bg-gradient-to-r from-[#2b1046] to-[#003741] rounded-t-lg max-h-[10rem] ">
        <img
          className="w-[13rem] h-[13rem] mb-2"
          src={`${SpringHost}/subidas/${idZapatilla}.png`}
          alt="imagen zapatillas"
        />
      </div>
      <div className="mt-1 ml-4 mr-3">
        <p className="font-semibold text-[1.2rem]">{modelo}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[1.1rem]">{precio}$</span>
          <a
            onClick={handleOnClick}
            className="font-semibold rounded-lg px-1 py-[0.1rem] bg-cyan-500 border-2 bg-origin-border border-transparent hover:border-2 hover:border-white hover:text-purple-500"
          >
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
