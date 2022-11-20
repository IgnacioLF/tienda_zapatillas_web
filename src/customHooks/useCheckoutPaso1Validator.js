/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import { notEmpty } from "../utils/Validators";
import { touchErrors } from "../utils/FormValidatorUtils";

export const useCheckoutPaso1Validator = (form) => {
  const [errors, setErrors] = useState({
    nombre: {
      touched: false,
      error: false,
      message: "",
    },
    direccion: {
      touched: false,
      error: false,
      message: "",
    },
    provincia: {
      touched: false,
      error: false,
      message: "",
    },
    ciudad: {
      touched: false,
      error: false,
      message: "",
    },
    cp: {
      touched: false,
      error: false,
      message: "",
    },
  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // crea una copia de errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // fuerza la validacion de todos los campos
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { nombre, direccion, provincia, ciudad, cp } = form;
    if (nextErrors.nombre.touched && (field ? field === "nombre" : true)) {
      const nombreMenssage = notEmpty(nombre, form);
      nextErrors.nombre.error = !!nombreMenssage;
      nextErrors.nombre.message = nombreMenssage;
      if (!!nombreMenssage) isValid = false;
    }
    if (
      nextErrors.direccion.touched &&
      (field ? field === "direccion" : true)
    ) {
      const direccionMessage = notEmpty(direccion, form);
      nextErrors.direccion.error = !!direccionMessage;
      nextErrors.direccion.message = direccionMessage;
      if (!!direccionMessage) isValid = false;
    }
    if (
      nextErrors.provincia.touched &&
      (field ? field === "provincia" : true)
    ) {
      const provinciaMenssage = notEmpty(provincia, form);
      nextErrors.provincia.error = !!provinciaMenssage;
      nextErrors.provincia.message = provinciaMenssage;
      if (!!provinciaMenssage) isValid = false;
    }
    if (nextErrors.ciudad.touched && (field ? field === "ciudad" : true)) {
      const ciudadMenssage = notEmpty(ciudad, form);
      nextErrors.ciudad.error = !!ciudadMenssage;
      nextErrors.ciudad.message = ciudadMenssage;
      if (!!ciudadMenssage) isValid = false;
    }
    if (nextErrors.cp.touched && (field ? field === "cp" : true)) {
      const cpMenssage = notEmpty(cp, form);
      nextErrors.cp.error = !!cpMenssage;
      nextErrors.cp.message = cpMenssage;
      if (!!cpMenssage) isValid = false;
    }
    setErrors(nextErrors);
    return { isValid, errors: nextErrors };
  };

  // comprueba si el campo ha sido seleccionado
  const onBlurField = (e) => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.touched) return;
    const updateErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        touched: true,
      },
    };
    validateForm({ form, field, errors: updateErrors });
  };

  return { validateForm, onBlurField, errors };
};
