import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FeaturePage from "./Pages/FeaturePage";
import HomePage from "./Pages/HomePage";
import PricingPage from "./Pages/PricingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignUpD from "./components/Dashboard/SignUpD";
import SignInD from "./components/Dashboard/SignInD";


import Dashboard from "./components/Dashboard/Dashboard";
import EditHomePage from "./components/Dashboard/EditHomePage";
import EditAboutPage from "./components/Dashboard/EditAboutPage";
import EditFeaturePage from "./components/Dashboard/EditFeaturePage";
import EditPrcingPage from "./components/Dashboard/EditPricingPage";
import Login from "./Pages/Login";
import { EditContactPage } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/adminsignup" element={<SignUpD />} />
          <Route path="/adminsignin" element={<SignInD />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edithome" element={<EditHomePage />} />
          <Route path="/editabout" element={<EditAboutPage />} />
          <Route path="/editfeature" element={<EditFeaturePage />} />
          <Route path="/editpricing" element={<EditPrcingPage />} />
          <Route path="/editcontact" element={<EditContactPage />} />
          <Route path="/login" element={<Login />} />







          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
