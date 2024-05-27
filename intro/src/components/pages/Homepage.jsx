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
  
  //const encargada de almacenar los datos del hook useScreenWidth para determinar el tipo de calendario que se muestra en pantalla
  //por medio de las medidas de esta
  const getHeight = useScreenWidth();

  return (
    <div>
      <Nav onOpenProfileModal={openProfileModal} />
      <Search />
      <div className="mt-4 mx-4">
        {/* Summary bar with key metrics */}
        <SummaryBar />
        {/* Carousel of tasks */}
        <SwiperTasks />
      </div>
      <div className="lg:flex lg:w-screen lg:gap-3 p-4">
        <div className="lg:w-[70%] sm:w-[100%]">
          {/* Componente del calendario. Su altura y diseño depende de las medidas de la pantalla.
          El lenguaje empleado se especifica en el atributo "calendarLanguage" */}
          <Calendar 
          calendarHeight={getHeight.heightHome}
          calendarMode={"dayGridMonth"}
          calendarLanguage={"es"}
          />
        </div>
        <div className="lg:w-[36.2%] sm:w-[100%]">
          {/* List of assignments */}
          <Assignments />
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
