import { FormInput } from "../access_panel_components/FormInput";
import Logo from "../../assets/imgs/logoEventorium.svg";

/**
 * Sign In Form component.
 *
 * Subcomponents:
 * @see FormInput
 */
export function SignInForm() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch('http://localhost/eventoriumBackend/public/api/user/authentificator', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user: user,
  //       password: password,
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.success) {
  //       // Almacenar el token en localStorage
  //       localStorage.setItem('token', data.token);
  //       // Redireccionar a principal
  //       window.location.href = 'http://localhost:5173/Homepage';
  //     } else {

  //       setError('Usuario o contraseña incorrectos');
  //       document.getElementsByName('usuario')[0].value='';
  //       document.getElementsByName('contrasena')[0].value='';
  //     }
  //   })
  //   .catch(error => console.error('Error al iniciar sesión:', error));
  // };

  // public function login(Request $request){

  //   $user=User::select('user_user_name','user_password')->where('user_user_name',$request->user)->first();
  //   if(!Bycript::check($request->password, $user->user_password)){
  //       return response(['message'=>'Invalid credentials'],Response::HTTP_UNAUTHORIZED);
  //   }
  //   $user=User::select('user_id')->where('user_user_name',$request->user)->first();
  //   $token = $user->createToken('Token')->plainTextToken;

  //   return response()->json([
  //       'success' => true,
  //       'token' => $token]);

  // }

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
            <form className="space-y-4 md:space-y-6" action="#">
              <FormInput
                type="text"
                title="username"
                name="Username"
                placeholder="luis_solis_b "
              />
              <FormInput
                type="password"
                title="password"
                name="Password"
                placeholder="••••••••"
              />
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
                type="submit"
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
