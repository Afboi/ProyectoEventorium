import { ModalProfile } from "../components/profile_user_components/ModalProfile.jsx"
import React, { useState } from 'react';
import "../../index.css";
export function ProfileUser() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <ModalProfile isOpen={isOpen} onClose={handleClose} />
    </div>
    );
}

export default ProfileUser;
