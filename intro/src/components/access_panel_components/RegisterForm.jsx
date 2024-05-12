import "../../index.css";
import { FormInput } from "../access_panel_components/FormInput";


export function RegisterForm() {
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-25 h-10 mr-2 " src="../../../public/eventorium-logo-dark.png" alt="logo" />
                </a>
                <div className="w-full bg-bg-card-light rounded-2xl shadow-secondary md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
                        <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl xl:text-[2]">
                            Crear una cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-2" action="#">
                            <FormInput type="name" name="Nombre Completo" placeholder="Luis Solís Barquero" />
                            <FormInput type="nickname" name="Nombre de Usuario" placeholder="luis_solis_b " />
                            <FormInput type="email" name="Correo Electrónico" placeholder="name@company.com"/>
                            <FormInput type="password" name="Contraseña" placeholder="••••••••" />
                            <FormInput type="confirm-password" name="Confirmar contraseña" placeholder="••••••••" />
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">Acepto los <a className="font-medium text-primary-600 hover:underline " href="#">Términos y Condiciones</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white shadow-secondary bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">Crear cuenta</button>
                            <p className="text-sm font-light text-gray-500">
                                Ya tiene una cuenta? <a href="#" className="font-medium text-primary-600 hover:underline">Iniciar Sesión</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


































