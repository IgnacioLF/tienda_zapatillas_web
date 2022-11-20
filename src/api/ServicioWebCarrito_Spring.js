import { SpringHost } from "../constants/constants";

// POST formData{idProducto,cantidad} => ok
export const agregarZapatillaCarrito = async (id, cantidad) => {
  const url = `${SpringHost}ServicioWebCarrito/agregarZapatilla`;
  const formData = new FormData();
  formData.append("idProducto", id);
  formData.append("cantidad", cantidad);

  return await fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// GET
export const obtenerCarrito = (userId) => {
  const url = `${SpringHost}ServicioWebCarrito/obtenerProductosCarrito?userId=${userId}`;

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
