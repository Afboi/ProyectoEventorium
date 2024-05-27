// Importing page components
import "../../index.css";
import Img from "../../assets/imgs/profile_img.png";
import Cancel from "../../assets/imgs/close-circle-svgrepo-com.svg";
import { InputsProfile } from "./InputsProfile";
import { useState, useEffect } from "react";

// The main EditProfileInfo component
export function EditProfileInfo({ isOpen, onClose, profileData, onConfirm }) {
  // State for managing form data.
  const [formData, setFormData] = useState({
    username: profileData.username,
    gender: profileData.gender || "",
    birthday: profileData.birthday || "",
    dream: profileData.dream || "",
  });

  // State for managing error messages.
  const [error, setError] = useState("");

  // Effect hook to update form data when modal is opened or profile data changes.
  useEffect(() => {
    if (isOpen) {
      setFormData({
        username: profileData.username,
        gender: profileData.gender || "",
        birthday: profileData.birthday || "",
        dream: profileData.dream || "",
      });
    }
  }, [isOpen, profileData]);

  // Handler for input changes.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for confirming changes.
  const handleConfirm = () => {
    if (!formData.gender || !formData.birthday || !formData.dream) {
      setError("Para confirmar tienes que seleccionar todas las opciones");
      return;
    }
    onConfirm({
      ...profileData,
      username: formData.username,
      gender: formData.gender,
      birthday: formData.birthday,
      dream: formData.dream,
    });
    setError("");
  };

  // Return null if modal is not open.
  if (!isOpen) {
    return null;
  }

  // Input configuration for the profile form.
  const inputs = [
    {
      id: 1,
      title: "Username",
      type: "text",
      placeholder: "Ingresa tu nombre",
      value: formData.username,
      onChange: handleChange,
      name: "username",
    },
    {
      id: 2,
      title: "Genero: ",
      type: "select",
      placeholder: "Escoge tu genero",
      options: [
        { value: "Masculino", label: "Masculino" },
        { value: "Femenino", label: "Femenino" },
        { value: "Otro", label: "Otro" },
      ],
      value: formData.gender,
      onChange: handleChange,
      name: "gender",
    },
    {
      id: 3,
      title: "Cumpleaños: ",
      type: "date",
      placeholder: "Escoge una fecha",
      value: formData.birthday,
      onChange: handleChange,
      name: "birthday",
    },
    {
      id: 4,
      title: "Sueño: ",
      type: "number",
      placeholder: "Escoge un número",
      value: formData.dream,
      onChange: handleChange,
      name: "dream",
    },
  ];

  // Return the modal structure.
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#1d1d1d] opacity-50" />

      <div className="z-10 bg-white mx-4 p-8 rounded-lg shadow-md max-w-2xl h-[45rem] md:max-h-[36rem] w-full">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={Img}
            alt="Profile Picture"
            className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
        {/* Close Button */}
        <div className="flex justify-end">
          <div className="flex gap-4">
            <a
              role="button"
              onClick={onClose}
              onKeyDown={onClose}
              className="cursor-pointer"
              tabIndex="0"
            >
              <img src={Cancel} alt="Close button" className="size-10" />
            </a>
          </div>
        </div>

        {/* Course Information */}
        <div className="mt-8">
          <h2 className="text-blue font-medium mt-2 text-md-xl">Cursos:</h2>
          <div className="flex gap-2">
            {profileData.courses.map((item) => (
              <p
                className="text-main-ty-light mt-3 text-md font-light"
                key={item.id}
              >
                {" "}
                | {item.initial} |{" "}
              </p>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <InputsProfile objects={inputs} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        {/* Button to confirm the editing of the information */}
        <div className="mt-8 justify-center items-center flex">
          <button
            className="rounded-full text-light-gray bg-blue w-full md:w-48W h-10"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
