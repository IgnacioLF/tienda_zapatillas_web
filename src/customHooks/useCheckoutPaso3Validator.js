/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import { notEmpty } from "../utils/Validators";
import { touchErrors } from "../utils/FormValidatorUtils";

export const useCheckoutPaso3Validator = (form) => {
  const [errors, setErrors] = useState({
    detallesPedido: {
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

    const { detallesPedido } = form;
    if (
      nextErrors.detallesPedido.touched &&
      (field ? field === "detallesPedido" : true)
    ) {
      const detallesPedidoMenssage = notEmpty(detallesPedido, form);
      nextErrors.detallesPedido.error = !!detallesPedidoMenssage;
      nextErrors.detallesPedido.message = detallesPedidoMenssage;
      if (!!detallesPedidoMenssage) isValid = false;
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
