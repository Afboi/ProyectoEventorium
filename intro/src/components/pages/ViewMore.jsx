import { Nav } from "../ui/Nav.jsx";
import { Search } from "../ui/SearchBar.jsx";
import { ModalProfile } from "../profile_user_components/ModalProfile.jsx";
import { EditProfileInfo } from "../profile_user_components/EditProfileInfo.jsx";

import {
  useProfileModal,
  useEditModal,
  useProfileData,
  handleEditConfirm,
} from "../../hooks/useGeneralInfo.js";
import { CardsExtra } from "../view_more_components/CardsExtra.jsx";

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
export function ViewMore() {
  const [isProfileModalOpen, openProfileModal, closeProfileModal] =
    useProfileModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useEditModal();
  const [profileData, setProfileData] = useProfileData();

  const confirmEdit = handleEditConfirm(
    setProfileData,
    closeEditModal,
    openProfileModal
  );

  return (
    <div>
      <Nav onOpenProfileModal={openProfileModal} />
      <Search />
      <div className="mt-4 mx-4">{/* Summary bar with key metrics */}</div>
      <div className="lg:flex lg:w-screen lg:gap-3 p-4">
        <CardsExtra />
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
