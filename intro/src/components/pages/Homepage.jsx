// Importing necessary libraries, components, and utilities
import { useEffect } from "react";
import { Nav } from "../ui/Nav.jsx";
import { Calendar } from "../ui/Calendar.jsx";
import { Search } from "../ui/SearchBar.jsx";
import useScreenWidth from "../../hooks/useScreenWidth.js";
import { SwiperTasks } from "../homepage_components/Swiper.jsx";
import { SummaryBar } from "../homepage_components/SummaryBar.jsx";
import { ModalProfile } from "../profile_user_components/ModalProfile.jsx";
import { EditProfileInfo } from "../profile_user_components/EditProfileInfo.jsx";
import {
  useProfileModal,
  useEditModal,
  useProfileData,
  handleEditConfirm,
} from "../../hooks/useGeneralInfo.js";
import { Assignments } from "../homepage_components/AssignmentsBar.jsx";
import { useFetchUsers } from "../../hooks/useFetchUsers.js";

/**
 * Homepage component.
 * This is the main page of the application.
 *
 * Subcomponents:
 * @see Nav
 * @see Search
 * @see SummaryBar
 * @see SwiperTasks
 * @see Calendar
 * @see Assignments
 */
export function Homepage() {
  const [isProfileModalOpen, openProfileModal, closeProfileModal] =
    useProfileModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useEditModal();
  const [profileData, setProfileData] = useProfileData();

  const confirmEdit = handleEditConfirm(
    setProfileData,
    closeEditModal,
    openProfileModal
  );

  const { data, isLoading } = useFetchUsers();

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      window.location.href = "/SignIn";
    }
  }, []);

  //const is responsible for storing data from the useScreenWidth hook to determine the type of calendar that is displayed on the screen by means of the measurements of this
  const getHeight = useScreenWidth();

  return (
    <div>
      {isLoading ? (
        <h1 className=" text-[50px] text-[#038C8B] absolute top-[20rem] left-[30rem] text-center">
        <img src="../../../public/logo.png" className="size-24 absolute bottom-[4rem] mb-4 left-[12rem]" alt="logo" />
        Eventorium is loading...
      </h1>
      ) : (
        <div>
          {/* Navigation and search components */}
          <Nav onOpenProfileModal={openProfileModal} data={data} />
          <Search id={data.id} />
          <div className="mt-4 mx-4">
            {/* Summary bar with key metrics */}
            <SummaryBar id={data.id} />

            {/* Carousel of tasks */}
            <SwiperTasks id={data.id} />
          </div>
          <div className="lg:flex lg:w-full lg:gap-3 p-4">
            <div className="lg:w-[70%] sm:w-[100%]">
              {/* Calendar component. Its height and design depends on the measurements of the screen. 
          The language used is specified in the "calendarLanguage" attribute*/}
              <Calendar
                calendarHeight={getHeight.heightHome}
                calendarMode={"dayGridMonth"}
                calendarLanguage={"en"}
                id={data.id}
              />
            </div>
            <div className="lg:w-[34.2%] sm:w-[100%]">
              {/* List of assignments */}
              <Assignments id={data.id} />
            </div>
          </div>

          {/* Profile modal components */}
          <ModalProfile
            isOpen={isProfileModalOpen}
            onClose={closeProfileModal}
            onOpenEditModal={() => {
              closeProfileModal();
              openEditModal();
            }}
            profileData={profileData}
            data={data}
          />

          {/* Edit profile modal components */}
          <EditProfileInfo
            isOpen={isEditModalOpen}
            onClose={() => {
              closeEditModal();
              openProfileModal();
            }}
            profileData={profileData}
            onConfirm={confirmEdit}
            data={data}
          />
        </div>
      )}
    </div>
  );
}
