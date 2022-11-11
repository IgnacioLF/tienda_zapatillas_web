import { SpringHost } from "../constants/constants";

export const obtenerZapatillas = () => {
  const url = `${SpringHost}ServicioZapatillas/obtenerZapatillas`;

  return fetch(url)
    .then((response) => {
      console.log("response :", response);
      return response.json();
    })
    .then((data) => {
      console.log("data :", data);
      return data;
    })
    .catch((error) => {
      console.log("error :", error);
    });
};
