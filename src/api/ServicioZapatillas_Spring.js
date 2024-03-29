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

// GET url..?id={idZapatilla} => {zapatilla}
export const obtenerZapatillaPorId = (id) => {
  const url = `${SpringHost}ServicioZapatillas/obtenerZapatillaPorId?id=${id}`;

  return fetch(url)
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

export const obtenerZapatillasBuscador = (modelo, comienzo) => {
  const url = `${SpringHost}ServicioZapatillas/obtenerZapatillas?modelo=${modelo}&comienzo=${comienzo}`;

  return fetch(url)
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

// GET
export const obtenerUltimasZapatillas = () => {
  const url = `${SpringHost}ServicioZapatillas/obtenerUltimasZapatillas`;

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
