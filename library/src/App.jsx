import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingpage/landingpage.jsx";
import UserLoginPage from "./pages/User/UserLogin/userlogin.jsx";
import UserSignupPage from "./pages/User/UserSignup/usersignup.jsx";
import AdminLoginPage from "./pages/Admin/Adminlogin/adminlogin.jsx";
import AdminSignupPage from "./pages/Admin/AdminSignup/adminsignup.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/userlogin" element={<UserLoginPage />} />
          <Route path="/usersignup" element={<UserSignupPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/adminsignup" element={<AdminSignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
