import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "./InputLabel";
import OutlineButton from "./OutlineButton";
import RedButton from "./RedButton";
import PurpleButton from "./PurpleButton";
import { useSignInValidator } from "../customHooks/useSigninValidator";
import ErrorDiv from "./ErrorDiv";
import {
  inicioSesionUsuario,
  userLogOut,
} from "../api/ServicioWebUsuarios_Spring";
import logoImage from "../assets/logo.png";
import { SpringHost } from "../constants/constants";
import { userContext } from "../App";

const Header = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const [userDetailDropdonw, setUserDetailDropdown] = useState(false);
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const { userId, setUserId } = useContext(userContext);

  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { errors, validateForm, onBlurField } = useSignInValidator(form);

  const onUpdateField = (e) => {
    setSubmitError("");
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].touched) {
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
    }
  };

  const handleUserClick = () => {
    if (userDropdown) {
      setUserDropdown(false);
    } else {
      setUserDropdown(true);
    }
  };

  const handleRegisterClick = () => {
    setUserDropdown(false);
    navigate("/registrarse");
  };

  const onSubmitSignIn = async (e) => {
    setSubmitError("");
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    const response = await inicioSesionUsuario(form.email, form.password);
    if (!response.includes("ok")) {
      setSubmitError("Credenciales incorrectas");
      return;
    }
    setUserId(response.split(",")[1]);
    // TODO login user
    setIsLogged(true);
    console.log("usuario logeado");
  };

  const handleProfileClick = () => {
    if (userDetailDropdonw) {
      setUserDetailDropdown(false);
    } else {
      setUserDetailDropdown(true);
    }
  };

  const handleOnClickLogOut = async () => {
    const resp = await userLogOut();
    console.log("resp :", resp);
    if (resp.ok) {
      setUserDetailDropdown(false);
      setUserId("");
      setIsLogged(false);
      setUserDropdown(false);
      setForm({
        email: "",
        password: "",
      });
    } else {
      console.log("error logout usuario");
    }
  };

  return (
    <header className="flex justify-center">
      <nav className="w-full max-w-[70%] flex justify-around items-center py-5 text-white font-semibold">
        <div className="ml-10">
          <Link to={"/"}>
            <img src={logoImage} className="h-[3rem]" />
          </Link>
        </div>
        <div className="ml-10">
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
          {!isLogged ? (
            <div className="mx-3">
              <a onClick={handleUserClick}>
                <svg
                  className="w-6 h-6 hover:text-purple-500"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
              {userDropdown && (
                <div className="max-w-[15rem] flex flex-col justify-center items-center absolute bg-black-gradient-2 ml-[-6rem] p-3 rounded-lg mt-4 z-10">
                  <form
                    onSubmit={onSubmitSignIn}
                    className="flex flex-col justify-center items-center mb-3 mx-2"
                  >
                    <InputLabel
                      label={"Correo Electronico"}
                      styles={"mb-1"}
                      inputType={"email"}
                      inputName={"email"}
                      inputValue={form.email}
                      inputOnChange={onUpdateField}
                      inputOnBlur={onBlurField}
                      errorform={
                        errors.email.touched && errors.email.error ? true : null
                      }
                    />
                    {errors.email.touched && errors.email.error ? (
                      <ErrorDiv
                        styles={"text-[0.8rem]"}
                        message={errors.email.message}
                      />
                    ) : null}
                    <InputLabel
                      label={"Contraseña"}
                      styles={"mb-1 mt-2"}
                      inputType={"password"}
                      inputName={"password"}
                      inputValue={form.password}
                      inputOnBlur={onBlurField}
                      inputOnChange={onUpdateField}
                      errorform={
                        errors.password.touched && errors.password.error
                          ? true
                          : null
                      }
                    />
                    {errors.password.touched && errors.password.error ? (
                      <ErrorDiv
                        styles={"mb-2 text-[0.8rem]"}
                        message={errors.password.message}
                      />
                    ) : null}
                    {submitError ? (
                      <ErrorDiv
                        styles={"mb-2 text-[0.8rem]"}
                        message={submitError}
                      />
                    ) : null}
                    <PurpleButton type="submit" styles={"mt-2"}>
                      Iniciar sesión
                    </PurpleButton>
                  </form>
                  <OutlineButton type="button" Click={handleRegisterClick}>
                    Registrarse
                  </OutlineButton>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="mx-3 hover:text-purple-500">
                <Link to={"/carrito"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </Link>
              </div>
              <div className="mx-3">
                <a onClick={handleProfileClick}>
                  <img
                    className="h-6 w-6"
                    src={`${SpringHost}/subidas/u${userId}.png`}
                  />
                </a>
                {userDetailDropdonw && (
                  <div className="max-w-[15rem] flex flex-col justify-center items-center absolute bg-black-gradient-2 p-3 ml-[-3rem] rounded-lg mt-4 z-10">
                    <RedButton type="button" Click={handleOnClickLogOut}>
                      Salir
                    </RedButton>
                  </div>
                )}
              </div>
            </>
          )}
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
