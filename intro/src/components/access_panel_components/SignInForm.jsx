import { FormInput } from "../access_panel_components/FormInput";

export function SignInForm() {
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-25 h-10 mr-2 " src="../../../public/eventorium-logo-dark.png" alt="logo" />
                </a>
                <div className="w-full bg-bg-card-light rounded-2xl shadow-secondary md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            ¡Bienvenido de nuevo!
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <FormInput type="nickname" name="Nombre de Usuario" placeholder="luis_solis_b " />
                            <FormInput type="password" name="Contraseña" placeholder="••••••••" />

                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">Iniciar Sesión</button>
                            <p className="text-sm font-light text-gray-500">
                                ¿No tienes una cuenta? <a href="#" className="font-medium text-primary-600 hover:underline">Regístrate aquí</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}