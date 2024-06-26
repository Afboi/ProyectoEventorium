// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Importing page components
import { Homepage } from "./components/pages/Homepage.jsx";
import { ViewMore } from "./components/pages/ViewMore.jsx";
import { SignIn } from "./components/pages/SignIn.jsx";
import { Registration } from "./components/pages/Registration.jsx";
import { EventDetails } from "./components/pages/EventDetails.jsx";
import { PasswordRecovery } from "./components/pages/PasswordRecovery.jsx";
import { PagesDirectory } from "./components/pages/PagesDirectory.jsx";

// The main App component
export function App() {
  // State for managing the visibility of the profile modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Function to open the profile modal
  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  // Function to close the profile modal
  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  // The component returns a Router with different Routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesDirectory />} />
        <Route
          path="/Homepage"
          element={
            <Homepage
              isProfileModalOpen={isProfileModalOpen}
              onOpenProfileModal={handleOpenProfileModal}
              onCloseProfileModal={handleCloseProfileModal}
            />
          }
        />
        <Route path="/ViewMore" element={<ViewMore />} />
        <Route path="/ViewMore/:search" element={<ViewMore />} />

        <Route path="/ViewMore/:search/:event" element={<ViewMore />} />
        <Route path="/ViewMore//:event" element={<ViewMore />} />

        <Route path="/ViewMore/:search/:event/:course" element={<ViewMore />} />
        <Route path="/ViewMore//:event/:course" element={<ViewMore />} />

        <Route path="/ViewMore/:search//:course" element={<ViewMore />} />
        <Route path="/ViewMore///:course" element={<ViewMore />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/EventDetails/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}
