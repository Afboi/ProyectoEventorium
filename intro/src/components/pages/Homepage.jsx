// Importing necessary libraries, components, and utilities
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

  console.log(profileData);

  const usefetchUser = useFetchUsers();
  console.log(usefetchUser);

  //const is responsible for storing data from the useScreenWidth hook to determine the type of calendar that is displayed on the screen by means of the measurements of this
  const getHeight = useScreenWidth();

  return (
    <div>
      {/* Navigation and search components */}
      <Nav onOpenProfileModal={openProfileModal} />
      <Search />
      <div className="mt-4 mx-4">
        {/* Summary bar with key metrics */}
        <SummaryBar />

        {/* Carousel of tasks */}
        <SwiperTasks />
      </div>
      <div className="lg:flex lg:w-full lg:gap-3 p-4">
        <div className="lg:w-[70%] sm:w-[100%]">
          {/* Calendar component. Its height and design depends on the measurements of the screen. 
          The language used is specified in the "calendarLanguage" attribute*/}
          <Calendar
            calendarHeight={getHeight.heightHome}
            calendarMode={"dayGridMonth"}
            calendarLanguage={"es"}
          />
        </div>
        <div className="lg:w-[34.2%] sm:w-[100%]">
          {/* List of assignments */}
          <Assignments />
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
      />
    </div>
  );
}
