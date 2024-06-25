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
import { useFetchUsers } from "../../hooks/useFetchUsers.js";
//import { useFetchEnrollCourses } from "../../hooks/useFetchEnrollCourses.js";

// The main EventDetails component
export function EventDetails() {

  //console.log('Soy la data de usuario del EventDetail',data)

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



  //const in charge of storing the data of the hook useScreenWidth to determine the type of calendar displayed on the screen by means of the measurements of this hook.
  const getHeight = useScreenWidth();


  return (
    <div className="">
    { isLoading ? <h1 className="text-center text-9xl">Cargando...</h1> : <div> {/* Navigation and search components */}
      <Nav onOpenProfileModal={openProfileModal} data={data} />
      <Search />

      {/* Summary bar component */}
      <div className="mt-4 mx-4">
        <SummaryBar />
      </div>

      {/* Event details and calendar components */}
      <div className="flex flex-col-reverse mb-4 sm:flex-row justify-center gap-6 mx-4 sm:mx-0">

        <Details userID={data.id}/>
        
        <div className="order-1 sm:order-2 w-full sm:w-[61%]">
          {/* Calendar component. Its height and layout depends on the screen size.
          The language used is specified in the "calendarLanguage" attribute. */}
          <Calendar
            calendarHeight={getHeight.heightDetail}
            calendarMode={getHeight.gridModeDetail}
            calendarLanguage={"en"}
            id={data.id}            
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
      /></div>}
    </div>
  );
}
