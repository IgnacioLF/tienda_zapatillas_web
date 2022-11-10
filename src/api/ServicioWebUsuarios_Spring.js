import { SpringHost } from "../constants/constants";

// POST formData {email,password} => ok,nombreUsuario || 403
export const inicioSesionUsuario = (email, pass) => {
  const url = `${SpringHost}ServicioWebUsuarios/identificarUsuario`;
  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);

  return fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// POST formData JSON.stringify{nombre,pass,email,edad,apellidos} => ok || 403
export const registrarUsuario = (nombre, pass, email, edad, apellidos) => {
  const url = `${SpringHost}ServicioWebUsuarios/registrarUsuario`;
  const formData = new FormData();
  const json = JSON.stringify({
    nombre,
    pass,
    email,
    edad,
    apellidos,
  });
  formData.append("info", json);

  return fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
