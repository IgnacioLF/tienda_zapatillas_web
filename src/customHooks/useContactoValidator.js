/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import { notEmpty } from "../utils/Validators";
import { touchErrors } from "../utils/FormValidatorUtils";

export const useContactoValidator = (form) => {
  const [errors, setErrors] = useState({
    nombre: {
      touched: false,
      error: false,
      message: "",
    },
    email: {
      touched: false,
      error: false,
      message: "",
    },
    mensaje: {
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

    const { nombre, email, mensaje } = form;
    if (nextErrors.nombre.touched && (field ? field === "nombre" : true)) {
      const nombreMessage = notEmpty(nombre, form);
      nextErrors.nombre.error = !!nombreMessage;
      nextErrors.nombre.message = nombreMessage;
      if (!!nombreMessage) isValid = false;
    }
    if (nextErrors.email.touched && (field ? field === "email" : true)) {
      const emailMenssage = notEmpty(email, form);
      nextErrors.email.error = !!emailMenssage;
      nextErrors.email.message = emailMenssage;
      if (!!emailMenssage) isValid = false;
    }
    if (nextErrors.mensaje.touched && (field ? field === "mensaje" : true)) {
      const mensajeMessage = notEmpty(mensaje, form);
      nextErrors.mensaje.error = !!mensajeMessage;
      nextErrors.mensaje.message = mensajeMessage;
      if (!!mensajeMessage) isValid = false;
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
