import "../../index.css";

import { ProfileInfo } from "../profile_user_components/ProfileInfo.jsx";
import { ProfileHeader } from "../profile_user_components/ProfileHeader.jsx";
import { InputsProfile } from "../profile_user_components/InputsProfile.jsx";
import { ModalProfile } from "../profile_user_components/ModalProfile.jsx"
import React, { useState } from 'react';
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
