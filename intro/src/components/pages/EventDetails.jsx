import { Nav } from '../ui/Nav.jsx';
import { Details } from '../event_detail_components/Details.jsx';
import { Calendar } from '../event_detail_components/Calendar.jsx';
import { Search } from '../ui/SearchBar.jsx';
import { SummaryBar } from '../homepage_components/SummaryBar.jsx';
import { ModalProfile } from '../profile_user_components/ModalProfile.jsx';
import { EditProfileInfo } from '../profile_user_components/EditProfileInfo.jsx';
import { useModal } from '../profile_user_components/useModal.js';
import { useState } from 'react';
import useScreenWidth from '../hooks/screenWidth.js';
import "../../index.css";


export function EventDetails() {
  const getHeight = useScreenWidth();
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
  
  const handleEditConfirm = (updatedData) => {
    setProfileData(updatedData);
    closeEditModal();
    openProfileModal();
  };
  
  /*<p>Width: {getHeight.gridModeDetail}</p>*/

  const info = [
    { id: 1, course: "TM-5100", priority: "High", progress: "Incomplete", time: "8:00a.m.-9:00a.m." }
  ];

  const data = [
    { id: 1, description: "Take the quiz on sequence diagrams for the course interactive application engineering.", }

  ]
  return (
    <div className=''>
      <Nav onOpenProfileModal={openProfileModal}/>
      <Search />
        <div className='mt-4 mx-4'>
          <SummaryBar />
        </div>
      <div className='flex flex-col-reverse mb-4 sm:flex-row justify-center gap-6 mx-4 sm:mx-0'>
        <Details items={info} objects={data} />
        <div className='order-1 sm:order-2 w-full sm:w-[57%]'>
        <Calendar calendarHeight={getHeight.heightDetail} calendarMode={getHeight.gridModeDetail} />
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