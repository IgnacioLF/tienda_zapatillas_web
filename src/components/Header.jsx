import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "./InputLabel";
import OutlineButton from "./OutlineButton";
import PurpleButton from "./PurpleButton";
import { useSignInValidator } from "../customHooks/useSigninValidator";
import ErrorDiv from "./ErrorDiv";

const Header = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { errors, validateForm, onBlurField } = useSignInValidator(form);

  const onUpdateField = (e) => {
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

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    console.log(errors);
    if (!isValid) return;
    console.log("la parte del front del sign in is es correcta");
  };

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
            <a onClick={handleUserClick}>
              <svg
                className="w-6 h-6"
                fill="white"
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
              <div className="max-w-[15rem] flex flex-col justify-center items-center absolute bg-black-gradient-2 ml-[-6rem] p-3 rounded-lg mt-4">
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
