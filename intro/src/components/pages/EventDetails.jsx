import { Nav } from "../ui/Nav.jsx";
import { Details } from "../event_detail_components/Details.jsx";
import { Calendar } from "../event_detail_components/Calendar.jsx";
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

export function EventDetails() {
  const getHeight = useScreenWidth();
  const [isProfileModalOpen, openProfileModal, closeProfileModal] =
    useProfileModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useEditModal();
  const [profileData, setProfileData] = useProfileData();

  const confirmEdit = handleEditConfirm(
    setProfileData,
    closeEditModal,
    openProfileModal
  );

  /*<p>Width: {getHeight.gridModeDetail}</p>*/

  const info = [
    {
      id: 1,
      course: "TM-5100",
      priority: "High",
      progress: "Incomplete",
      time: "8:00a.m.-9:00a.m.",
    },
  ];

  const data = [
    {
      id: 1,
      description:
        "Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering Take the quiz on sequence diagrams for the course interactive application engineering",
    },
  ];
  return (
    <div className="">
      <Nav onOpenProfileModal={openProfileModal} />
      <Search />
      <div className="mt-4 mx-4">
        <SummaryBar />
      </div>
      <div className="flex flex-col-reverse mb-4 sm:flex-row justify-center gap-6 mx-4 sm:mx-0">
        <Details items={info} objects={data} />
        <div className="order-1 sm:order-2 w-full sm:w-[61%]">
          <Calendar
            calendarHeight={getHeight.heightDetail}
            calendarMode={getHeight.gridModeDetail}
          />
        </div>
      </div>
      <ModalProfile
        isOpen={isProfileModalOpen}
        onClose={closeProfileModal}
        onOpenEditModal={() => {
          closeProfileModal();
          openEditModal();
        }}
        profileData={profileData}
      />
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
