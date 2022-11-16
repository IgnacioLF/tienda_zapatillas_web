import PurpleButton from "../components/PurpleButton";
import InputLabel from "../components/InputLabel";
import { useState } from "react";
import { useContactoValidator } from "../customHooks/useContactoValidator";
import ErrorDiv from "../components/ErrorDiv";
import TextAreaLabel from "../components/TextAreaLabel";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const { errors, validateForm, onBlurField } = useContactoValidator(form);

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

  const onSubmitContacto = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    // TODO
    console.log("test");
  };

  return (
    <div className="text-white flex my-[3.5rem] items-center justify-evenly mx-[10rem]">
      <div
        id="purple_blur_top_left"
        className="absolute z-[0] top-[0%] left-[20%] bottom-0 w-[20%] h-[20%] purple__gradient rounded-full"
      />
      <div
        id="cyan_blur_top_right"
        className="absolute z-[0] top-[40%] right-0 bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <div
        id="cyan_blur_middle_left"
        className="absolute z-[0] left-[-10%] top-[82%] bottom-0 w-[17%] h-[17%] cyan__gradient rounded-full"
      />
      <div className="flex justify-center items-center">
        <div className="w-[30rem] mr-10">
          <span className="text-cyan-500 text-[1rem]">Contactanos</span>
          <h2 className="font-bold text-white text-[3rem] leading-[1.2] mt-2">
            ¿Tienes preguntas?
          </h2>
          <p className="mt-7 text-[1.2rem] text-gray-400">
            Rellena este formulario para ponerte en contacto con nosotros, por
            si tienes alguna duda o quieres ofrecernos alguna colaboracion.
          </p>
          <p className="mt-3 text-[1.2rem] text-gray-400">
            Tambien puedes ponerte en contacto a traves de mensaje privado en
            cualqueira de nuestras redes sociales
          </p>
        </div>
        <div className="rounded-xl  w-fit  mt-10 p-[3px] bg-gradient-to-r from-purple-600 to-cyan-500">
          <div className="flex flex-col items-center w-fit justify-between h-full bg-black-gradient-2 text-white rounded-lg p-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-10 h-10 mr-2"
              >
                <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
              </svg>

              <h1 className="font-bold text-[2.5rem]">Escribenos</h1>
            </div>
            <p className="mb-2 mt-2">
              Introduce tus datos para contactar con nosotros
            </p>
            <form
              className="w-full flex flex-col justify-center items-center"
              onSubmit={onSubmitContacto}
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
              <TextAreaLabel
                label={"Mensaje"}
                labelStyles={"font-bold"}
                styles="mt-3 w-full"
                textAreaName={"mensaje"}
                textAreaValue={form.mensaje}
                textAreaOnBlur={onBlurField}
                textAreaOnChange={onUpdateField}
                errorform={
                  errors.mensaje.touched && errors.mensaje.error ? true : null
                }
              />
              {errors.mensaje.touched && errors.mensaje.error ? (
                <ErrorDiv
                  styles={"text-[0.8rem]"}
                  message={errors.mensaje.message}
                />
              ) : null}
              <PurpleButton
                type={"submit"}
                styles="mt-5 px-10 w-fit font-semibold"
              >
                Enviar
              </PurpleButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
