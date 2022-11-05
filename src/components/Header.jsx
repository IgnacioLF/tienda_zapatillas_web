import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-around py-5 bg-slate-500">
        <div>
          <Link to={"/"}>Logo</Link>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-3">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mx-3">
              <Link to={"/tienda"}>Productos</Link>
            </li>
            <li className="mx-3">
              <Link to={"/sobre_nosotros"}>Sobre nosotros</Link>
            </li>
            <li className="mx-3">
              <Link to={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="mx-3">👀</div>
          <div className="mx-3">🛒</div>
          <div className="mx-3">Comprar</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
