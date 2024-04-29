import { Homepage } from './components/pages/Homepage.jsx';
import { AccessPanel } from './components/pages/AccessPanel.jsx';
import { ProfileUser } from './components/pages/ProfileUser.jsx';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AccessPanel" element={<AccessPanel />} />
        <Route path="/ProfileUser" element={<ProfileUser />} />
      </Routes>
    </Router>
  );
}
