// Importing page components
import "../../index.css";
import Img from "../../assets/imgs/profile_img.png";
import Cancel from "../../assets/imgs/close-circle-svgrepo-com.svg";

// The main ProfileUserResult component
export function ProfileUserResult({
  items,
  onOpenEditModal,
  onClose,
  data
}) {

  return (
    <div className="z-10 bg-gray-100 flex items-center justify-center p-2">
      <div className="z-10 bg-white mx-4 p-8 rounded-lg shadow-md max-w-2xl h-[45rem] md:max-h-[32rem] w-full">
        {/* Profile picture */}
        <div className="relative">
          <img
            src={data.image_url}
            alt="Profile Picture"
            className=" object-cover absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-2/4 w-32 h-32 rounded-full border-4 border-white"
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
              {data.username}
            </h2>
          </div>
        </div>

        {/* List of user courses */}
        <div className="mt-8">
          <h2 className="text-blue font-medium mt-2 text-md-xl">Email:</h2>
          <div className="flex gap-0 md:gap-2">
              <p className="text-md-xl font-light text-main-ty-light">
              {data.email }
              </p>
          </div>
        </div>

        {/* Additional profile information */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-10 md:gap-20">
          <div className="text-center mt-4">
            <span className="block text-[1.70rem] font-medium text-blue">
              Diseases
            </span>
            <label className="text-[1.40rem] text-main-ty-light">
              {data.diseases|| ""}
            </label>
          </div>
          <div className="text-center mt-4">
            <span className="block text-[1.70rem] font-medium text-blue">
              Physical Activity
            </span>
            <label className="text-[1.40rem] text-main-ty-light">
              {data.physical_activity || ""}
            </label>
          </div>
          <div className="text-center mt-4">
            <span className="block text-[1.70rem] font-medium text-blue">
              Sleep Hours
            </span>
            <label className="text-[1.40rem] text-main-ty-light">
              {data.sleep_hours || ""}
            </label>
          </div>
        </div>
        {/* Button to edit information */}
        <div className="mt-8 justify-center items-center flex">
          <button
            className="rounded-full text-light-gray bg-blue w-full md:w-48 h-10"
            onClick={onOpenEditModal}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
