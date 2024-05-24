import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/pages/Homepage.jsx";
import { SignIn } from "./components/pages/SignIn.jsx";
import { Registration } from "./components/pages/Registration.jsx";
import { EventDetails } from "./components/pages/EventDetails.jsx";
import { PasswordRecovery } from "./components/pages/PasswordRecovery.jsx";
import { PagesDirectory } from "./components/pages/PagesDirectory.jsx";

export function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesDirectory/>}/>
        <Route path="/Homepage" element={<Homepage isProfileModalOpen={isProfileModalOpen} onOpenProfileModal={handleOpenProfileModal} onCloseProfileModal={handleCloseProfileModal}/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
        <Route path="/EventDetails" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}
