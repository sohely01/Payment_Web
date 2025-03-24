import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FeaturePage from "./Pages/FeaturePage";
import HomePage from "./Pages/HomePage";
import PricingPage from "./Pages/PricingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignUpD from "./Dashboard/SignUpD";
import SignInD from "./Dashboard/SignInD";
import Dashboard from "./Dashboard/Dashboard";
import EditHomePage from "./Dashboard/EditHomePage";
import EditAboutPage from "./Dashboard/EditAboutPage";
import EditFeaturePage from "./Dashboard/EditFeaturePage";
import EditPrcingPage from "./Dashboard/EditPricingPage";
import EditContactPage from "./Dashboard/EditContactpage";

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





          
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
