import { SpringHost } from "../constants/constants";

// POST formData {email,password} => ok,nombreUsuario || 403
export const inicioSesionUsuario = async (email, pass) => {
  const url = `${SpringHost}ServicioWebUsuarios/identificarUsuario`;
  const formData = new FormData();
  formData.append("email", email);
  formData.append("pass", pass);

  return await fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res.text();
    })
    .catch((err) => {
      return err;
    });
};

// POST formData{nombre,pass,email,appelidos,foto} => ok || 403
// POST formData JSON.stringify{nombre,pass,email,edad,apellidos} => ok || 403 (DEPRECATED)
export const registrarUsuario = (
  nombre,
  pass,
  email,
  edad,
  apellidos,
  foto
) => {
  const url = `${SpringHost}ServicioWebUsuarios/registrarUsuario`;
  const formData = new FormData();
  /*   const json = JSON.stringify({
    nombre,
    pass,
    email,
    edad,
    apellidos,
  });
  formData.append("info", json); */
  formData.append("nombre", nombre);
  formData.append("pass", pass);
  formData.append("email", email);
  formData.append("edad", edad);
  formData.append("apellidos", apellidos);
  formData.append("foto", foto);

  return fetch(url, { method: "POST", body: formData })
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
