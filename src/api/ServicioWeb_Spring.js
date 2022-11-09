import { SpringHost } from "../constants/constants";

// TODO check
export const obtenerZapatillas = () => {
  const obtenerZapatillasURL = `${SpringHost}ServicioZapatillas/obtenerZapatillas`;
  fetch("/api")
    .then((response) => {
      response.json();
    })
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
