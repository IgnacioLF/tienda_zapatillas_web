/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import {
  edadValidator,
  apellidosValidator,
  confirmPasswordValidator,
  emailValidator,
  nombreValidator,
  passwordValidator,
} from "../utils/Validators";
import { touchErrors } from "../utils/FormValidatorUtils";

export const useSignUpValidator = (form) => {
  const [errors, setErrors] = useState({
    nombre: {
      touched: false,
      error: false,
      message: "",
    },
    apellidos: {
      touched: false,
      error: false,
      message: "",
    },
    edad: {
      touched: false,
      error: false,
      message: "",
    },
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
    confirmPassword: {
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

    const { nombre, apellidos, edad, email, password, confirmPassword } = form;
    if (nextErrors.nombre.touched && (field ? field === "nombre" : true)) {
      const nombreMenssage = nombreValidator(nombre, form);
      nextErrors.nombre.error = !!nombreMenssage;
      nextErrors.nombre.message = nombreMenssage;
      if (!!nombreMenssage) isValid = false;
    }
    if (
      nextErrors.apellidos.touched &&
      (field ? field === "apellidos" : true)
    ) {
      const apellidosMenssage = apellidosValidator(apellidos, form);
      nextErrors.apellidos.error = !!apellidosMenssage;
      nextErrors.apellidos.message = apellidosMenssage;
      if (!!apellidosMenssage) isValid = false;
    }
    if (nextErrors.edad.touched && (field ? field === "edad" : true)) {
      const edadMenssage = edadValidator(edad, form);
      nextErrors.edad.error = !!edadMenssage;
      nextErrors.edad.message = edadMenssage;
      if (!!edadMenssage) isValid = false;
    }
    if (nextErrors.email.touched && (field ? field === "email" : true)) {
      const emailMenssage = emailValidator(email, form);
      nextErrors.email.error = !!emailMenssage;
      nextErrors.email.message = emailMenssage;
      if (!!emailMenssage) isValid = false;
    }
    if (nextErrors.password.touched && (field ? field === "password" : true)) {
      const passwordMessage = passwordValidator(password, form);
      nextErrors.password.error = !!passwordMessage;
      nextErrors.password.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
    }
    if (
      nextErrors.confirmPassword.touched &&
      (field ? field === "confirmPassword" : true)
    ) {
      const confirmPasswordMessage = confirmPasswordValidator(
        confirmPassword,
        form
      );
      nextErrors.confirmPassword.error = !!confirmPasswordMessage;
      nextErrors.confirmPassword.message = confirmPasswordMessage;
      if (!!confirmPasswordMessage) isValid = false;
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
