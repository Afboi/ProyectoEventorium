// Importing necessary libraries, components, and utilities
import { useEffect } from "react";
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
import { useParams } from "react-router-dom";

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

  const { data, isLoading } = useFetchUsers();

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      window.location.href = "/SignIn";
    }
  }, []);

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
          {/* Results cards components */}
          <div className="flex lg:flex lg:w-full lg:gap-3 p-4">
            <CardsExtra id={data.id} />
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
      )}
    </div>
  );
}
