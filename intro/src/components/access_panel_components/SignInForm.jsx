import { FormInput } from "../access_panel_components/FormInput";
import Logo from "../../assets/imgs/logoEventorium.svg";

/**
 * Sign In Form component.
 *
 * Subcomponents:
 * @see FormInput
 */
export function SignInForm() {
  return (
    <section className="dark:text-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-25 h-10 mr-2 " src={Logo} alt="logo" />
        </a>
        <div className="w-full bg-bg-card-light rounded-2xl shadow-secondary md:mt-0 sm:max-w-md xl:p-0 dark:bg-dark-blue">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-blue md:text-2xl">
              ¡Bienvenido de nuevo!
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <FormInput
                type="nickname"
                name="Nombre de Usuario"
                placeholder="luis_solis_b "
              />
              <FormInput
                type="password"
                name="Contraseña"
                placeholder="••••••••"
              />
              <p className="text-sm font-light text-gray-500">
                ¿Olvidó su contraseña?{" "}
                <a
                  href="/PasswordRecovery"
                  className="font-medium text-blue hover:underline dark:text-orange"
                >
                  Restablecer aquí
                </a>
              </p>
              <button
                type="submit"
                className="w-full text-white bg-blue hover:bg-light-gray hover:text-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-[#bb7c4c] dark:focus:ring-[#ffcca4]"
              >
                Iniciar Sesión
              </button>
              <p className="text-sm font-light text-gray-500">
                ¿No tienes una cuenta?{" "}
                <a
                  href="/Registration"
                  className="font-medium text-blue hover:underline dark:text-orange"
                >
                  Regístrate aquí
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
