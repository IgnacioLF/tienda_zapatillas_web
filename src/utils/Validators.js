export const notEmpty = (value) => {
  if (!value) {
    return "Debe rellenar el campo";
  }
  return "";
};
