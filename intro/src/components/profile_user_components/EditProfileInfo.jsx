// Importing page components
import "../../index.css";
import Cancel from "../../assets/imgs/close-circle-svgrepo-com.svg";
import { InputsProfile } from "./InputsProfile";
import { useState, useEffect } from "react";

// The main EditProfileInfo component
export function EditProfileInfo({
  isOpen,
  onClose,
  profileData,
  onConfirm,
  data,
}) {
  console.log(data.id);
  // State for managing form data.
  const [formData, setFormData] = useState({
    username: data.username,
    diseases: data.diseases,
    physical_activity: data.physical_activity,
    sleep_hours: data.sleep_hours,
    email: data.email,
  });

  const [imageFile, setImageFile] = useState(null); // Estado para el archivo de imagen

  const [imageURL, setImageURL] = useState(data.image_url); // Estado para la URL de la imagen

  // State for managing error messages.
  const [error, setError] = useState("");

  // Effect hook to update form data when modal is opened or profile data changes.
  useEffect(() => {
    if (isOpen) {
      setFormData({
        username: data.username,
        diseases: data.diseases,
        physical_activity: data.physical_activity,
        sleep_hours: data.sleep_hours,
        email: data.email,
      });
      setImageURL(data.image_url); // Resetea la URL de la imagen al abrir el modal
      setError(""); // Resetea el mensaje de error al abrir el modal
    }
  }, [isOpen, profileData, data]);

  // Handler for input changes.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Guarda el archivo de imagen
      const newImageUrl = URL.createObjectURL(file);
      setImageURL(newImageUrl);
    }
  };

  // Manejador para la presentación del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Crear un objeto FormData para enviar los datos
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("diseases", formData.diseases);
    formDataToSend.append("physical_activity", formData.physical_activity);
    formDataToSend.append("sleep_hours", formData.sleep_hours);
    formDataToSend.append("email", formData.email);

    if (imageFile) {
      formDataToSend.append("image", imageFile); // Añadir la imagen solo si se ha seleccionado
    }

    try {
      const response = await fetch(
        "http://eventoriumbackend.test/api/updateProfile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Añadir el token de autenticación desde el almacenamiento local
          },
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Llama a la función onConfirm para actualizar el estado global o la interfaz según sea necesario
        onConfirm(result.user);

        // Cierra el modal tras la actualización exitosa
        onClose();
      } else {
        // Manejar errores de la respuesta
        setError(result.message || "Failed to update profile");
      }
    } catch (error) {
      // Manejar errores de la solicitud
      setError("An error occurred while updating the profile");
      console.error("Error:", error);
    }
  };

  // Return null if modal is not open.
  if (!isOpen) {
    return null;
  }

  //Input configuration for the profile form.
  const inputs = [
    {
      id: 1,
      title: "Username:",
      type: "text",
      placeholder: "Enter your username",
      value: formData.username,
      onChange: handleChange,
      name: "username",
    },
    {
      id: 2,
      title: "Diseases: ",
      type: "select",
      placeholder: "Choose your disease",
      options: [
        { value: "Diabetes", label: "Diabetes" },
        { value: "Hipertension", label: "Hypertension" },
        { value: "Obesidad", label: "Obesity" },
        { value: "Asma", label: "Asthma" },
        { value: "Artritis", label: "Arthritis" },
        { value: "Ninguna", label: "None" },
      ],
      value: formData.diseases,
      onChange: handleChange,
      name: "diseases",
    },
    {
      id: 3,
      title: "Physical Activity: ",
      type: "select",
      placeholder: "Choose your physical activity",
      options: [
        { value: "Sedentario", label: "Sedentary" },
        { value: "Moderado", label: "Moderate" },
        { value: "Activo", label: "Active" },
      ],
      value: formData.physical_activity,
      onChange: handleChange,
      name: "physical_activity",
    },
    {
      id: 4,
      title: "Sleep Hours: ",
      type: "number",
      placeholder: "Choose a number",
      value: formData.sleep_hours,
      onChange: handleChange,
      name: "sleep_hours",
    },
  ];

  // Return the modal structure.
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#1d1d1d] opacity-50" />

      <div className="z-10 bg-white mx-4 p-8 rounded-lg shadow-md max-w-2xl h-[45rem] md:max-h-[36rem] w-full">
        {/* Profile Picture */}
        <form
          action="http://eventoriumbackend.test/api/updateProfile"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="relative">
            <img
              src={imageURL || data.image_url}
              alt="Profile Picture"
              className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
            />
            <input
              type="file"
              style={{ objectFit: "cover" }}
              name="image"
              onChange={handleImageChange}
              className="cursor-pointer absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 opacity-0 w-32 h-32 rounded-full"
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
          {/* http://eventoriumbackend.test/api/updateProfile */}
          {/* <form onSubmit={handleSubmit}> */}
          <input type="hidden" name="userId" value={data.id} />
          <div className="mt-8">
            <h2 className="text-blue font-medium mt-2 text-[1.90rem] text-center">
              Edit the profile information
            </h2>
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.50rem] font-medium text-blue">Email:</h2>
              <input
                name="email"
                className="text-main-ty-light border-main-ty-light border-2 rounded-full py-2 px-3 w-full"
                type="email"
                value={formData.email}
                defaultValue={data.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Form Inputs */}
          <InputsProfile data={data} objects={inputs} />
          {error && <p className="text-red-500 text-center">{error}</p>}
          {/* Button to confirm the editing of the information */}
          <div className="mt-8 justify-center items-center flex">
            <button
              type="submit"
              className="rounded-full text-light-gray bg-blue w-full md:w-48W h-10"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
