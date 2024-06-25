import React, { useState, useRef } from "react";
import "../../index.css";
import { FormInput } from "../access_panel_components/FormInput";
import Logo from "../../assets/imgs/logoEventorium.svg";
import { SelectInput } from "../access_panel_components/SelectInput";

export const diseases = [
  { id: 1, name: "Diabetes", label: "Diabetes"},
  { id: 2, name: "Hipertension", label: "Hypertension"},
  { id: 3, name: "Obesidad", label: "Obesity" },
  { id: 4, name: "Asma", label: "Asthma" },
  { id: 5, name: "Artritis", label: "Arthritis" },
  { id: 6, name: "Ninguna", label: "None" },
];

export const physical_activity = [
  { id: 1, name: "Sedentario", label: "Sedentary" },
  { id: 2, name: "Moderado",  label: "Moderate" },
  { id: 3, name: "Activo",  label: "Active" },
];


/**
 * Password Recovery Form component.
 *
 * Subcomponents:
 * @see FormInput
 */
export function RegisterForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleCircleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className="dark:text-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-25 h-10 mr-2" src={Logo} alt="logo" />
        </a>
        <div className="w-full bg-bg-card-light rounded-2xl shadow-secondary md:mt-0 sm:w-[50rem] xl:p-0 dark:bg-dark-blue">
          <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
            <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-blue md:text-2xl">
              Create a new account!
            </h1>

            <form
              className="space-y-4 md:space-y-2"
              action="http://eventoriumbackend.test/api/user/create"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-2 gap-4 overflow-x-auto h-[20rem]">
                <div className="col-span-2 flex items-center ">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />

                  <div
                    className="w-[10rem] h-[10rem] rounded-full border-4 border-blue flex items-center justify-center cursor-pointer bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    onClick={handleCircleClick}
                  >
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-gray-500">Select Image</span>
                    )}
                  </div>
                  <div className="ml-6 w-[34rem]">
                    <FormInput
                      type="text"
                      name="Name"
                      title="name"
                      placeholder="Enter your name"
                      required
                    />
                    <FormInput
                      type="text"
                      name="Last Name"
                      title="lastname"
                      placeholder="Enter your Last name"
                      required
                    />
                  </div>
                </div>

                <FormInput
                  type="text"
                  name="Username"
                  title="username"
                  placeholder="Enter your username"
                  required
                />
                <FormInput
                  type="email"
                  name="Email Addres"
                  title="email"
                  placeholder="Enter your email address"
                  required
                />
                <SelectInput
                  name="Diseases"
                  title="diseases"
                  items={diseases}
                  placeholder="Select your diseases"
                  required
                />
                <SelectInput
                  name="Physical Activity"
                  title="physical_activity"
                  items={physical_activity}
                  placeholder="Select your physical activities"
                  required
                />
                <FormInput
                  type="number"
                  name="Sleep Hours"
                  title="sleep_hours"
                  placeholder="Enter your sleep hours"
                  required
                />
                <FormInput
                  type="password"
                  name="Password"
                  title="password"
                  required
                />
                
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-blue hover:underline dark:text-orange"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue hover:bg-light-gray hover:text-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-[#bb7c4c] dark:focus:ring-[#ffcca4]"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <a
                  href="SignIn"
                  className="font-medium text-blue hover:underline dark:text-orange"
                >
                  Log In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
