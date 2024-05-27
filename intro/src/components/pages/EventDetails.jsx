// Importing page components
import { Nav } from "../ui/Nav.jsx";
import { Details } from "../event_detail_components/Details.jsx";
import { Calendar } from "../ui/Calendar.jsx";
import { Search } from "../ui/SearchBar.jsx";
import { SummaryBar } from "../homepage_components/SummaryBar.jsx";
import { ModalProfile } from "../profile_user_components/ModalProfile.jsx";
import { EditProfileInfo } from "../profile_user_components/EditProfileInfo.jsx";
import {
  useProfileModal,
  useEditModal,
  useProfileData,
  handleEditConfirm,
} from "../../hooks/useGeneralInfo.js";
import useScreenWidth from "../../hooks/useScreenWidth.js";
import "../../index.css";

// The main EventDetails component
export function EventDetails() {
  //const in charge of storing the data of the hook useScreenWidth to determine the type of calendar displayed on the screen by means of the measurements of this hook.
  const getHeight = useScreenWidth();

  // State variables and functions for managing profile modal and edit modal
  const [isProfileModalOpen, openProfileModal, closeProfileModal] =
    useProfileModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useEditModal();
  const [profileData, setProfileData] = useProfileData();

  const confirmEdit = handleEditConfirm(
    setProfileData,
    closeEditModal,
    openProfileModal
  );

  // Sample event information
  const info = [
    {
      id: 1,
      course: "TM-5100",
      priority: "High",
      progress: "Incomplete",
      time: "8:00a.m.-9:00a.m.",
    },
  ];

  // Sample data for event details
  const data = [
    {
      id: 1,
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  return (
    <div className="">
      {/* Navigation and search components */}
      <Nav onOpenProfileModal={openProfileModal} />
      <Search />

      {/* Summary bar component */}
      <div className="mt-4 mx-4">
        <SummaryBar />
      </div>

      {/* Event details and calendar components */}
      <div className="flex flex-col-reverse mb-4 sm:flex-row justify-center gap-6 mx-4 sm:mx-0">
        <Details items={info} objects={data} />
        <div className="order-1 sm:order-2 w-full sm:w-[61%]">
          {/* Calendar component. Its height and layout depends on the screen size.
          The language used is specified in the "calendarLanguage" attribute. */}
          <Calendar
            calendarHeight={getHeight.heightDetail}
            calendarMode={getHeight.gridModeDetail}
            calendarLanguage={"en"}
          />
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
