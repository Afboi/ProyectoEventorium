// Importing necessary libraries, components, and utilities
import { FormInput } from "../access_panel_components/FormInput";
import Logo from "../../assets/imgs/logoEventorium.svg";

/**
 * Password Recovery Form component.
 * This component is used to render the password recovery form.
 *
 * Subcomponents:
 * @see FormInput
 * 
 */
export function PasswordRecoveryForm() {

  const baseUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
  const redirectUrl = `${baseUrl}/SignIn`;
  
  return (
    <section className="dark:text-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/Registration"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-25 h-10 mr-2 " src={Logo} alt="logo" />
        </a>
        <div className="w-full bg-bg-card-light rounded-2xl shadow-secondary md:mt-0 sm:max-w-md xl:p-0 dark:bg-dark-blue">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-blue md:text-2xl">
              Revovery Password
            </h1>
            <form className="space-y-4 md:space-y-6" action="http://eventoriumbackend.test/api/recoveryPassword" method="POST">
            <input type="hidden" name="url" value={redirectUrl}></input>
              <FormInput
                type="email"
                name="Email"
                title="email"
                placeholder="Enter your email"
              />
              <FormInput
                type="password"
                name="New Password"
                title="password"
                placeholder="Enter your new password"
              />
              <button
                type="submit"
                className="w-full text-white bg-blue hover:bg-light-gray hover:text-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-[#bb7c4c] dark:focus:ring-[#ffcca4]"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
