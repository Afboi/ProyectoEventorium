import { Homepage } from './components/pages/Homepage.jsx';
import { ProfileUser } from './components/pages/ProfileUser.jsx';
import { SignIn } from './components/pages/SignIn.jsx';
import { Registration} from './components/pages/Registration.jsx'; 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ProfileUser" element={<ProfileUser />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}
