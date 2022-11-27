import { useContext, useState } from "react";
import InputLabel from "./InputLabel";
import PurpleButton from "./PurpleButton";
import ErrorDiv from "./ErrorDiv";
import { useCheckoutPaso1Validator } from "../customHooks/useCheckoutPaso1Validator";
import { sendCheckoutPaso1 } from "../api/ServicioWebPedidos_Spring";
import { userContext } from "../App";

const CheckoutPaso1 = ({ goToPaso2 }) => {
  const { userId } = useContext(userContext);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    provincia: "",
    ciudad: "",
    cp: "",
  });
  const { errors, validateForm, onBlurField } = useCheckoutPaso1Validator(form);

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    const response = await sendCheckoutPaso1(
      form.nombre,
      form.direccion,
      form.provincia,
      form.ciudad,
      form.cp,
      userId
    );
    if (!response.includes("ok")) {
      setSubmitError("No se pudo realizar la operación");
      return;
    }
    goToPaso2();
  };

  return (
    <div className="rounded-xl mx-auto w-fit  mt-10 p-[3px] bg-gradient-to-r from-purple-600 to-cyan-500 mb-10">
      <div className="flex flex-col items-center w-fit justify-between h-full bg-black-gradient-2 text-white rounded-lg p-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-10 h-10 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
              clipRule="evenodd"
            />
          </svg>

          <h1 className="font-bold text-[2.5rem]">Realizar pedido </h1>
        </div>
        <p className="mb-2 mt-2">Introduce tus datos de envio</p>
        <form
          onSubmit={handleOnSubmit}
          className="w-full flex flex-col justify-center items-center"
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
            label={"Direccion"}
            labelStyles={"font-bold"}
            styles="mt-3 w-full"
            inputType={"text"}
            inputName={"direccion"}
            inputValue={form.direccion}
            inputOnBlur={onBlurField}
            inputOnChange={onUpdateField}
            errorform={
              errors.direccion.touched && errors.direccion.error ? true : null
            }
          />
          {errors.direccion.touched && errors.direccion.error ? (
            <ErrorDiv
              styles={"text-[0.8rem]"}
              message={errors.direccion.message}
            />
          ) : null}
          <InputLabel
            label={"Provincia"}
            labelStyles={"font-bold"}
            styles="mt-3 w-full"
            inputType={"text"}
            inputName={"provincia"}
            inputValue={form.provincia}
            inputOnBlur={onBlurField}
            inputOnChange={onUpdateField}
            errorform={
              errors.provincia.touched && errors.provincia.error ? true : null
            }
          />
          {errors.provincia.touched && errors.provincia.error ? (
            <ErrorDiv
              styles={"text-[0.8rem]"}
              message={errors.provincia.message}
            />
          ) : null}
          <InputLabel
            label={"Ciudad"}
            labelStyles={"font-bold"}
            styles="mt-3 w-full"
            inputType={"text"}
            inputName={"ciudad"}
            inputValue={form.ciudad}
            inputOnBlur={onBlurField}
            inputOnChange={onUpdateField}
            errorform={
              errors.ciudad.touched && errors.ciudad.error ? true : null
            }
          />
          {errors.ciudad.touched && errors.ciudad.error ? (
            <ErrorDiv
              styles={"text-[0.8rem]"}
              message={errors.ciudad.message}
            />
          ) : null}
          <InputLabel
            label={"Codigo postal"}
            labelStyles={"font-bold"}
            styles="mt-3 w-full"
            inputType={"number"}
            inputName={"cp"}
            inputValue={form.cp}
            inputOnBlur={onBlurField}
            inputOnChange={onUpdateField}
            errorform={errors.cp.touched && errors.cp.error ? true : null}
          />
          {errors.cp.touched && errors.cp.error ? (
            <ErrorDiv styles={"text-[0.8rem]"} message={errors.cp.message} />
          ) : null}
          {submitError ? (
            <ErrorDiv styles={"text-[0.8rem]"} message={submitError} />
          ) : null}
          <PurpleButton type={"submit"} styles="mt-5 px-10 w-fit font-semibold">
            Continuar
          </PurpleButton>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPaso1;
