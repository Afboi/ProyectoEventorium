import "../../index.css";
import { RegisterForm } from "../access_panel_components/RegisterForm";
import { SignInForm } from "../access_panel_components/SignInForm";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export function AccessPanel() {
  return (
    <Router>
      <Routes>
        <Route path="/AccessPanel/RegisterForm" element={<RegisterForm />} />
        <Route path="/AccessPanel/SignInForm" element={<SignInForm />} />
      </Routes>
    </Router>
  );
}