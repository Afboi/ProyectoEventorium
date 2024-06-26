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
  // State for managing form data.
  const [formData, setFormData] = useState(
    Object.entries({
      username: data.username,
      diseases: data.diseases,
      physical_activity: data.physical_activity,
      sleep_hours: data.sleep_hours,
    })
  );

  //console.log("formdata" + formData);

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
    if (
      !formData.diseases ||
      !formData.physical_activity ||
      !formData.sleep_hours
    ) {
      setError("Para confirmar tienes que seleccionar todas las opciones");
      return;
    }
    onConfirm({
      ...profileData,
      username: formData.username,
      diseases: formData.diseases,
      physical_activity: formData.physical_activity,
      sleep_hours: formData.sleep_hours,
    });
    setError("");
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
      placeholder: "choose your disease",
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
      name: "disease",
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
        <div className="relative">
          <img
            src={data.image_url}
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
        <form
          action="http://eventoriumbackend.test/api/updateProfile"
          method="POST"
        >
          <div className="mt-8">
            <h2 className="text-blue font-medium mt-2 text-[1.90rem] text-center">
              Edit the profile information
            </h2>
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.50rem] font-medium text-blue">Email:</h2>
              <input name="email"
                className="text-main-ty-light border-main-ty-light border-2 rounded-full py-2 px-3 w-full"
                type="email"
                defaultValue={data.email}
              />
            </div>
          </div>

          {/* Form Inputs */}
          <InputsProfile data={data} objects={inputs} />
          {error && <p className="text-red-500 text-center">{error}</p>}
          {/* Button to confirm the editing of the information */}
          <div className="mt-8 justify-center items-center flex">
            <button type="submit"
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
