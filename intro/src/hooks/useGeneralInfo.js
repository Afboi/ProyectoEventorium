import { useState } from 'react';
import { useModal } from './useModal';

// These hooks utilize the useModal hook to manage the state of the profile modal and edit modal, respectively.
// They return an array containing state variables and functions to control the modal.
export const useProfileModal = () => useModal();
export const useEditModal = () => useModal();

// This hook initializes and manages the state of the profile data.
// It returns an array containing the profile data state variable and its setter function.
export const useProfileData = () => useState({
  courses: [
    { id: 1, initial: "TM-5150" },
    { id: 2, initial: "TM-5250" },
    { id: 3, initial: "TM-5350" },
    { id: 4, initial: "TM-5450" },
    { id: 5, initial: "TM-aa" },
  ],
});

// This function handles the confirmation of profile data editing.
// It takes setProfileData, closeEditModal, and openProfileModal functions as parameters.
// Upon confirmation, it sets the updated profile data, closes the edit modal, and opens the profile modal.
export const handleEditConfirm = (setProfileData, closeEditModal, openProfileModal) => (updatedData) => {
  setProfileData(updatedData);
  closeEditModal();
  openProfileModal();
};