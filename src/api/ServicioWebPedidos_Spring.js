/* eslint-disable camelcase */
import { SpringHost } from "../constants/constants";

// POST formData{nombre,direccion,provincia,ciudad,cp,idUsuario} => ok || 403
export const sendCheckoutPaso1 = async (
  nombre,
  direccion,
  provincia,
  ciudad,
  cp,
  idUsuario
) => {
  const url = `${SpringHost}ServicioWebPedidos/paso1`;
  const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("direccion", direccion);
  formData.append("provincia", provincia);
  formData.append("ciudad", ciudad);
  formData.append("cp", cp);
  formData.append("idUsuario", idUsuario);

  return await fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res.text();
    })
    .catch((err) => {
      return err;
    });
};

// POST formData{titular,numero,idUsuario} => ok || 403
export const sendCheckoutPaso2 = async (titular, numero, idUsuario) => {
  const url = `${SpringHost}ServicioWebPedidos/paso2`;
  const formData = new FormData();
  formData.append("titular", titular);
  formData.append("numero", numero);
  formData.append("idUsuario", idUsuario);

  return await fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res.text();
    })
    .catch((err) => {
      return err;
    });
};

// POST formData{detalles_envio,idUsuario} => ok || 403
export const sendCheckoutPaso3 = async (detalles_envio, idUsuario) => {
  const url = `${SpringHost}ServicioWebPedidos/paso3`;
  const formData = new FormData();
  formData.append("detalles_envio", detalles_envio);
  formData.append("idUsuario", idUsuario);

  return await fetch(url, { method: "POST", body: formData })
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

// POST formData{idUsuario} => ok || 403
export const confirmarPedido = async (idUsuario) => {
  const url = `${SpringHost}ServicioWebPedidos/confirmarPedido`;
  const formData = new FormData();
  formData.append("idUsuario", idUsuario);

  return await fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res.text();
    })
    .catch((err) => {
      return err;
    });
};
