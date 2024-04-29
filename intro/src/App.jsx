import { Homepage } from './components/pages/Homepage.jsx';
import { AccessPanel } from './components/pages/AccessPanel.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AccessPanel" element={<AccessPanel />} />
      </Routes>
    </Router>
  );
}
