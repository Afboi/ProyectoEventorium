// import { FormInput } from "../access_panel_components/FormInput";
import Logo from "../../assets/imgs/logoEventorium.svg";
// import { useFetchLogIn } from "../../hooks/useFetchLogIn";
import React, { useState } from "react";

/**
 * Sign In Form component.
 *
 * Subcomponents:
 * @see FormInput
 */
export function SignInForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    
    console.log("Datos enviados:", { user, password });
    
    event.preventDefault();
    fetch("http://eventoriumbackend.test/api/user/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("token", data.token);
          window.location.href = "http://localhost:5173/Homepage";
        } else {
        }
      })
      .catch((error) => console.error("Error al iniciar sesión:", error));
  };

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
              Welcome back!
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-blue"
                >
                  Username
                </label>
                <input
                onChange={(e) => setUser(e.target.value)}
                  type="text"
                  name="username"
                  placeholder="uwu"
                  className="bg-gray-50 border border-gray-300 text-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-blue"
                >
                  Password
                </label>
                <input
                onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="Password"
                  className="bg-gray-50 border border-gray-300 text-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              {/* <FormInput
                type="password"
                title="password"
                name="Password"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              /> */}
              <p className="text-sm font-light text-gray-500">
                Forgot your password?{" "}
                <a
                  href="/PasswordRecovery"
                  className="font-medium text-blue hover:underline dark:text-orange"
                >
                  Reset here
                </a>
              </p>
              <button
                className="w-full text-white bg-blue hover:bg-light-gray hover:text-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-[#bb7c4c] dark:focus:ring-[#ffcca4]"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account?{" "}
                <a
                  href="/Registration"
                  className="font-medium text-blue hover:underline dark:text-orange"
                >
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
