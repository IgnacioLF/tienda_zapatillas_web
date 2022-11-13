import { SpringHost } from "../constants/constants";

const ZapatillaCard = ({ idZapatilla, modelo, precio, styles }) => {
  return (
    <div className={`${styles} text-white max-w-[19rem] ml-[4rem] my-10`}>
      <div className="flex justify-center items-center bg-opacity-100 bg-gradient-to-r from-[#2b1046] to-[#003741] rounded-t-lg max-h-[13rem] ">
        <img
          className="w-[16.4rem] h-[16.4rem] mb-2"
          src={`${SpringHost}/subidas/${idZapatilla}.png`}
        />
      </div>
      <div className="pt-2 pl-4 pr-3 pb-4 bg-black-gradient-2 rounded-b-lg">
        <p className="font-semibold text-[1.2rem]">{modelo}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[1.1rem]">{precio}$</span>
          <a
            onClick={() => alert("TODO")}
            className="font-semibold rounded-lg px-1 py-[0.1rem] bg-cyan-500 border-2 bg-origin-border border-transparent hover:border-2 hover:border-white hover:text-purple-500"
          >
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ZapatillaCard;
