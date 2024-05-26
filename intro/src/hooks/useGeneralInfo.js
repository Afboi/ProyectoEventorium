import { useState } from 'react';
import { useModal } from './useModal';

export const useProfileModal = () => useModal();
export const useEditModal = () => useModal();

export const useProfileData = () => useState({
  username: "",
  courses: [
    { id: 1, initial: "TM-5150" },
    { id: 2, initial: "TM-5250" },
    { id: 3, initial: "TM-5350" },
    { id: 4, initial: "TM-5450" },
    { id: 5, initial: "TM-5550" },
  ],
});

export const handleEditConfirm = (setProfileData, closeEditModal, openProfileModal) => (updatedData) => {
  setProfileData(updatedData);
  closeEditModal();
  openProfileModal();
};