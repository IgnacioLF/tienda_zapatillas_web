import InputLabel from "../components/InputLabel";
import PurpleButton from "../components/PurpleButton";

const Register = () => {
  return (
    <div className="text-white">
      <div className="rounded-xl mx-auto w-fit  mt-10 p-[3px] bg-gradient-to-r from-purple-600 to-cyan-500">
        <div className="flex flex-col items-center w-fit justify-between h-full bg-[#0e0f0a] text-white rounded-lg p-6">
          <h1 className="font-bold text-[2.5rem]">Registrate</h1>
          <p className="mb-2 mt-2">
            Introduce tus datos para registrarte en la tienda
          </p>
          <form className="w-full flex flex-col justify-center items-center">
            <InputLabel label={"Nombre"} styles="mt-3 w-full" />
            <InputLabel label={"Apellidos"} styles="mt-3 w-full" />
            <InputLabel label={"Edad"} styles="mt-3 w-full" />
            <InputLabel label={"Email"} styles="mt-3 w-full" />
            <InputLabel label={"Contraseña"} styles="mt-3 w-full" />
            <InputLabel
              label={"Repetir contraseña"}
              styles="mt-3 w-full mb-4"
            />
            <PurpleButton type={"submit"} styles="px-10 w-fit">
              Registrarse
            </PurpleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
