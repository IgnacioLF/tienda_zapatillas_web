/* eslint-disable prefer-regex-literals */
export const notEmpty = (value) => {
  if (!value) {
    return "Debe rellenar el campo";
  }
  return "";
};

export const emailValidator = (email) => {
  if (!email) {
    return "Email es requerido";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Email con formato incorrecto";
  }
  return "";
};

export const passwordValidator = (password) => {
  if (!password) {
    return "Contraseña es requerida";
  } else if (password.length < 8) {
    return "Contraseña tiene que ser mayor que 8 caracteres";
  }
  return "";
};

export const confirmPasswordValidator = (confirmPassword, form) => {
  if (!confirmPassword) {
    return "Repetir contraseña es requerida";
  } else if (confirmPassword.length < 8) {
    return "Repetir contraseña tiene que ser mayor que 8 caracteres";
  } else if (confirmPassword !== form.password) {
    return "Repetir contrasela no coincide con contraseña";
  }
  return "";
};

export const nombreValidator = (nombre) => {
  if (!nombre) {
    return "Nombre es requerido";
  } else if (nombre.length < 4) {
    return "Nombre tiene que ser mayor que 4 caracteres";
  }
  return "";
};

export const apellidosValidator = (apellidos) => {
  if (!apellidos) {
    return "Apellidos son requeridos";
  } else if (apellidos.length < 6) {
    return "Apellidos tiene que ser mayor que 4 caracteres";
  }
  return "";
};

export const edadValidator = (edad) => {
  if (!edad) {
    return "Edad es requerida";
  } else if (edad < 0 || edad > 110) {
    return "Edad no es válida";
  }
};
