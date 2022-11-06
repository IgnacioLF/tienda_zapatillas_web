import { Link, useNavigate } from "react-router-dom";
import PurpleButton from "./PurpleButton";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="flex justify-around items-center py-5 text-white font-semibold">
        <div>
          <Link to={"/"}>Logo</Link>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-3 transition-all hover:text-purple-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mx-3 transition-all hover:text-purple-500">
              <Link to={"/tienda"}>Productos</Link>
            </li>
            <li className="mx-3 transition-all hover:text-purple-500">
              <Link to={"/sobre_nosotros"}>Sobre nosotros</Link>
            </li>
            <li className="mx-3 transition-all hover:text-purple-500">
              <Link to={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="mx-3">👀</div>
          <div className="mx-3">🛒</div>
          <div className="mx-3">
            <PurpleButton type={"button"} Click={() => navigate("/tienda")}>
              Comprar
            </PurpleButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
