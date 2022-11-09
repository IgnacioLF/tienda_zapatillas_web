/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import { notEmpty } from "../utils/Validators";
import { touchErrors } from "../utils/FormValidatorUtils";

export const useSignInValidator = (form) => {
  const [errors, setErrors] = useState({
    email: {
      touched: false,
      error: false,
      message: "",
    },
    password: {
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

    const { email, password } = form;
    if (nextErrors.email.touched && (field ? field === "email" : true)) {
      const emailMenssage = notEmpty(email, form);
      nextErrors.email.error = !!emailMenssage;
      nextErrors.email.message = emailMenssage;
      if (!!emailMenssage) isValid = false;
    }
    if (nextErrors.password.touched && (field ? field === "password" : true)) {
      const passwordMessage = notEmpty(password, form);
      nextErrors.password.error = !!passwordMessage;
      nextErrors.password.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
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
