import { useState } from "react";
import { registrarUsuario } from "../api/ServicioWebUsuarios_Spring";
import InputLabel from "../components/InputLabel";
import PurpleButton from "../components/PurpleButton";
import { useSignUpValidator } from "../customHooks/useSignUpValidator";
import ErrorDiv from "../components/ErrorDiv";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validateForm, onBlurField } = useSignUpValidator(form);

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

  const onSubmitSignUp = async (e) => {
    setSubmitError("");
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    const response = await registrarUsuario(
      form.nombre,
      form.password,
      form.email,
      form.edad,
      form.apellidos
    );
    if (!response.ok) {
      setSubmitError("Credenciales incorrectas");
      return;
    }
    // TODO change user session logged
    navigate("/");
  };

  return (
    <div className="text-white mb-9">
      <div
        id="purple_blur_top_left"
        className="absolute z-[0] top-[10%] left-0 bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div
        id="cyan_blur_top_left"
        className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <div className="rounded-xl mx-auto w-fit  mt-10 p-[3px] bg-gradient-to-r from-purple-600 to-cyan-500">
        <div className="flex flex-col items-center w-fit justify-between h-full bg-black-gradient-2 text-white rounded-lg p-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-10 h-10 mr-2"
            >
              <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
            </svg>
            <h1 className="font-bold text-[2.5rem]">Registrate</h1>
          </div>
          <p className="mb-2 mt-2">
            Introduce tus datos para registrarte en la tienda
          </p>
          <form
            className="w-full flex flex-col justify-center items-center"
            onSubmit={onSubmitSignUp}
          >
            <InputLabel
              label={"Nombre"}
              labelStyles={"font-bold"}
              styles="mt-3 w-full"
              inputType={"text"}
              inputName={"nombre"}
              inputValue={form.nombre}
              inputOnBlur={onBlurField}
              inputOnChange={onUpdateField}
              errorform={
                errors.nombre.touched && errors.nombre.error ? true : null
              }
            />
            {errors.nombre.touched && errors.nombre.error ? (
              <ErrorDiv
                styles={"text-[0.8rem]"}
                message={errors.nombre.message}
              />
            ) : null}
            <InputLabel
              label={"Apellidos"}
              labelStyles={"font-bold"}
              styles="mt-3 w-full"
              inputType={"text"}
              inputName={"apellidos"}
              inputValue={form.apellidos}
              inputOnBlur={onBlurField}
              inputOnChange={onUpdateField}
              errorform={
                errors.apellidos.touched && errors.apellidos.error ? true : null
              }
            />
            {errors.apellidos.touched && errors.apellidos.error ? (
              <ErrorDiv
                styles={"text-[0.8rem]"}
                message={errors.apellidos.message}
              />
            ) : null}
            <InputLabel
              label={"Edad"}
              labelStyles={"font-bold"}
              styles="mt-3 w-full"
              inputType={"number"}
              inputName={"edad"}
              inputValue={form.edad}
              inputOnBlur={onBlurField}
              inputOnChange={onUpdateField}
              errorform={errors.edad.touched && errors.edad.error ? true : null}
            />
            {errors.edad.touched && errors.edad.error ? (
              <ErrorDiv
                styles={"text-[0.8rem]"}
                message={errors.edad.message}
              />
            ) : null}
            <InputLabel
              label={"Email"}
              labelStyles={"font-bold"}
              styles="mt-3 w-full"
              inputType={"email"}
              inputName={"email"}
              inputValue={form.email}
              inputOnBlur={onBlurField}
              inputOnChange={onUpdateField}
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
              labelStyles={"font-bold"}
              styles="mt-3 w-full"
              inputType={"password"}
              inputName={"password"}
              inputValue={form.password}
              inputOnBlur={onBlurField}
              inputOnChange={onUpdateField}
              errorform={
                errors.password.touched && errors.password.error ? true : null
              }
            />
            {errors.password.touched && errors.password.error ? (
              <ErrorDiv
                styles={"text-[0.8rem]"}
                message={errors.password.message}
              />
            ) : null}
            <InputLabel
              label={"Repetir contraseña"}
              labelStyles={"font-bold"}
              styles="mt-3 w-full"
              inputType={"password"}
              inputName={"confirmPassword"}
              inputValue={form.confirmPassword}
              inputOnBlur={onBlurField}
              inputOnChange={onUpdateField}
              errorform={
                errors.confirmPassword.touched && errors.confirmPassword.error
                  ? true
                  : null
              }
            />
            {errors.confirmPassword.touched && errors.confirmPassword.error ? (
              <ErrorDiv
                styles={"text-[0.8rem]"}
                message={errors.confirmPassword.message}
              />
            ) : null}
            {submitError ? (
              <ErrorDiv styles={"text-[0.8rem]"} message={submitError} />
            ) : null}
            <PurpleButton
              type={"submit"}
              styles="mt-5 px-10 w-fit font-semibold"
            >
              Registrarse
            </PurpleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
