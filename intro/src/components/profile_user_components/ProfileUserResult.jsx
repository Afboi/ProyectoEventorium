// Importing page components
import "../../index.css";
import Img from "../../assets/imgs/profile_img.png";
import Cancel from "../../assets/imgs/close-circle-svgrepo-com.svg";

// The main ProfileUserResult component
export function ProfileUserResult({
  items,
  profileData,
  onOpenEditModal,
  onClose,
}) {
  return (
    <div className="z-10 bg-gray-100 flex items-center justify-center p-2">
      <div className="z-10 bg-white mx-4 p-8 rounded-lg shadow-md max-w-2xl h-[45rem] md:max-h-[34rem] w-full">
        {/* Profile picture */}
        <div className="relative">
          <img
            src={Img}
            alt="Profile Picture"
            className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-2/4 w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        {/* Button to close the modal */}
        <div className="grid gap-4 justify-end">
          <a
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
            className="cursor-pointer"
            tabIndex="0"
          >
            <img src={Cancel} alt="Close Button" className="size-10" />
          </a>
        </div>

        {/* User information */}
        <div className="flex justify-between mt-5">
          <div>
            <h2 className="font-medium text-blue text-md-xl">User:</h2>
            <h2 className="text-md-xl font-light text-main-ty-light">
              {profileData.username}
            </h2>
          </div>
        </div>

        {/* List of user courses */}
        <div className="mt-8">
          <h2 className="text-blue font-medium mt-2 text-md-xl">Cursos:</h2>
          <div className="flex gap-0 md:gap-2">
            {items.map((item) => (
              <p
                className="text-main-ty-light mt-3 md:text-md text-xs font-light"
                key={item.id}
              >
                {" "}
                | {item.initial} |{" "}
              </p>
            ))}
          </div>
        </div>

        {/* Additional profile information */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-10 md:gap-20">
          <div className="text-center">
            <span className="block text-md-xl font-medium text-blue">
              Género
            </span>
            <label className="text-sm text-main-ty-light">
              {profileData.gender || ""}
            </label>
          </div>
          <div className="text-center">
            <span className="block text-md-xl font-medium text-blue">
              Cumpleaños
            </span>
            <label className="text-sm text-main-ty-light">
              {profileData.birthday || ""}
            </label>
          </div>
          <div className="text-center">
            <span className="block text-md-xl font-medium text-blue">
              Sueño
            </span>
            <label className="text-sm text-main-ty-light">
              {profileData.dream || ""}
            </label>
          </div>
        </div>
        {/* Button to edit information */}
        <div className="mt-8 justify-center items-center flex">
          <button
            className="rounded-full text-light-gray bg-blue w-full md:w-48 h-10"
            onClick={onOpenEditModal}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
