const Tienda = () => {
  // TODO remove just a test
  fetch(
    "http://localhost:8080/19-SpringMVC-tienda_hibernate-MAIN/ServicioZapatillas/obtenerZapatillas"
  )
    .then((response) => {
      console.log("response :", response);
      return response.json();
    })
    .then((data) => {
      console.log("data :", data);
    })
    .catch((error) => {
      console.log("error :", error);
    });

  return <div className="text-white">Esto es la tienda</div>;
};

export default Tienda;
