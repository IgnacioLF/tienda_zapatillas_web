/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import { notEmpty } from "../utils/Validators";
import { touchErrors } from "../utils/FormValidatorUtils";

export const useCheckoutPaso2Validator = (form) => {
  const [errors, setErrors] = useState({
    titular: {
      touched: false,
      error: false,
      message: "",
    },
    numero: {
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

    const { titular, numero } = form;
    if (nextErrors.titular.touched && (field ? field === "titular" : true)) {
      const titularMenssage = notEmpty(titular, form);
      nextErrors.titular.error = !!titularMenssage;
      nextErrors.titular.message = titularMenssage;
      if (!!titularMenssage) isValid = false;
    }
    if (nextErrors.numero.touched && (field ? field === "numero" : true)) {
      const numeroMenssage = notEmpty(numero, form);
      nextErrors.numero.error = !!numeroMenssage;
      nextErrors.numero.message = numeroMenssage;
      if (!!numeroMenssage) isValid = false;
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
