// Importing necessary libraries, components, and utilities
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
import { useFetchUsers } from "../../hooks/useFetchUsers.js";


/**
 * View More Page component.
 * This page displays the search bar results.
 *
 * Subcomponents:
 * @see Nav
 * @see Search
 * @see CardsExtra
 * @see ModalProfile
 * @see EditProfileInfo
 */
export function ViewMore() {
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

  const {data, isLoading} = useFetchUsers();
  console.log(data);

  return (
    <div>
      {/* Navigation and search components */}
      <Nav onOpenProfileModal={openProfileModal} data={data} />
      <Search />
      {/* Results cards components */}
      <div className="flex lg:flex lg:w-full lg:gap-3 p-4">
        <CardsExtra />
      </div>

      {/*Profile modal components */}
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
  );
}
