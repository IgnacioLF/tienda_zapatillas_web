import { SpringHost } from "../constants/constants";

// GET
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

export const obtenerZapatillaPorId = (id) => {
  const url = `${SpringHost}ServicioZapatillas/obtenerZapatillaPorId`;
  const formData = new FormData();
  formData.append("id", id);

  return fetch(url, { method: "POST", body: formData })
    .then((response) => {
      console.log("response :", response);
      return response.json();
    })
    .then((data) => {
      console.log("data :", data);
      return data;
    })
    .catch((err) => {
      console.log("error obteniendo zaptilla", err);
      return null;
    });
};
