import { SpringHost } from "../constants/constants";

// POST formData {email,password} => ok,nombreUsuario || error, ...
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
