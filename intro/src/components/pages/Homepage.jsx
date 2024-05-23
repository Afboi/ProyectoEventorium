import { Nav } from '../ui/Nav.jsx';
import { Evaluations } from '../homepage_components/Evaluations.jsx';
import { Calendar } from '../homepage_components/Calendar.jsx';
import { Search } from '../ui/SearchBar.jsx';
import useScreenWidth from '../hooks/screenWidth.js';
import { SwiperTasks } from '../homepage_components/Swiper.jsx';
import { SummaryBar } from '../homepage_components/SummaryBar.jsx';
import { ModalProfile } from '../profile_user_components/ModalProfile.jsx';
import { EditProfileInfo } from '../profile_user_components/EditProfileInfo.jsx';
import { useModal } from '../profile_user_components/useModal.js';
import { useState } from 'react';
// import "../../index.css";

export function Homepage() {

  const [isProfileModalOpen, openProfileModal, closeProfileModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [profileData, setProfileData] = useState({
    username: "",
    courses: [
      { id: 1, initial: "TM-5150" },
      { id: 2, initial: "TM-5250" },
      { id: 3, initial: "TM-5350" },
      { id: 4, initial: "TM-5450" },
      { id: 5, initial: "TM-5550" },
    ],
  });

  const getHeight = useScreenWidth();

  const handleEditConfirm = (updatedData) => {
    setProfileData(updatedData);
    closeEditModal();
    openProfileModal();
  };

  return (
    <div>
      <Nav onOpenProfileModal={openProfileModal}/>
      <Search />
      <div>
        <div className='mt-4 mx-4'>
          <SummaryBar />
        </div>
        <div className='mt-4 mx-4'>
          <SwiperTasks />
        </div>
        <div className='lg:flex lg:w-full lg:gap-3 mx-4'>
          <div className='lg:w-[70%] sm:w-[100%] mt-4'>
            <Calendar calendarHeight={getHeight.heightHome} />
          </div>
          <div className='lg:w-[30%] sm:w-[100%]'>
            <Evaluations />
          </div>
        </div>
      </div>
      <ModalProfile isOpen={isProfileModalOpen} onClose={closeProfileModal} onOpenEditModal={() => {
          closeProfileModal();
          openEditModal();
        }}
        profileData={profileData} />
        <EditProfileInfo
        isOpen={isEditModalOpen}
        onClose={() => {
          closeEditModal();
          openProfileModal();
        }}
        profileData={profileData}
        onConfirm={handleEditConfirm}
      />
    </div>
  );
}