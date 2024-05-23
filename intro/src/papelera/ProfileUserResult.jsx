import "../../index.css";
import Img from "../../assets/imgs/profile_img.png";
import Edit from "../../assets/imgs/edit-svgrepo-com.svg";
import Cancel from "../../assets/imgs/xmark-svgrepo-com.svg";


export function ProfileUserResult({ items, profileData, onOpenEditModal, onClose }) {
  return (
    <div className="z-10 bg-gray-100 flex items-center justify-center p-2">
      <div className="bg-white p-8 rounded-lg shadow-md  md:w-full  md:max-h-[23rem] h-[45rem] w-[22rem]">
        <div className="relative">
          <img
            src={Img}
            alt="Profile Picture"
            className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-2/4 w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
          <div className="flex gap-4 justify-end ">
            <a onClick={onOpenEditModal} className="cursor-pointer">
              <img
                src={Edit}
                alt="Edit button"
                className="size-10 p-1 bg-[#DAE1D5] rounded-full"
              />
            </a>
            <a onClick={onClose} className="cursor-pointer">
              <img
                src={Cancel}
                alt="Close Button"
                className="size-10 p-1 bg-[#DAE1D5] rounded-full"
              />
            </a>
          </div>
        <div className="flex justify-between mt-5">
          <div>
            <h2 className="font-medium text-blue text-md-xl">User:</h2>
            <h2 className="text-md-xl font-light text-main-ty-light">
              {profileData.username}
            </h2>
          </div>
        </div>

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
        <div className="flex justify-center items-center mt-6 gap-20">
          <div className="text-center">
            <span className="block text-md-xl font-medium text-blue">Genero</span>
            <label className="text-sm text-main-ty-light">{profileData.gender || ''}</label>
          </div>
          <div className="text-center">
            <span className="block text-md-xl font-medium text-blue">Cumpleaños</span>
            <label className="text-sm text-main-ty-light">{profileData.birthday || ''}</label>
          </div>
          <div className="text-center">
            <span className="block text-md-xl font-medium text-blue">Sueño</span>
            <label className="text-sm text-main-ty-light">{profileData.dream || ''}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
