import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./assets/Pages/LandingPage"
import LoginPage from './assets/Pages/LoginPage';
import RegisterPage from './assets/Pages/RegisterPage';
import AboutPage from './assets/Pages/AboutPage';
import FeaturesPage from "./assets/Pages/FeaturesPage"
import BenefitPage from "./assets/Pages/BenefitsPage"
import LutfiScriptPage from "./assets/Pages/LutfiScriptPage"
import MateriPage from './assets/Layout/MateriPage';
import ForgotPassword from './assets/Pages/ForgotPassword'
import ResetPassword from './assets/Pages/ResetPassword';
import Quiz from './assets/Quiz/MainQuiz';
import MainAdmin from './assets/Admin/MainAdmin';
import EditModule from './assets/Admin/PageAdmin/EditModule';
import ViewUser from './assets/Admin/PageAdmin/ViewUser';
import AdminLogin from './assets/Admin/PageAdmin/AdminLogin';
import AdminRegister from './assets/Admin/PageAdmin/AdminRegister'
import ViewComent from './assets/Admin/PageAdmin/ViewComent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* bisa di akses sebelum login */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/benefits" element={<BenefitPage />} />

        {/* tidak bisa di akses sebelum login dengan akun yang benar */}
        <Route path="/lutfiscript" element={<LutfiScriptPage />} />
        <Route path="/lutfiscript/materi/:id" element={<MateriPage />} />
        <Route path="/lutfiscript/quiz" element={<Quiz />} />

        <Route path="/admin" element={<MainAdmin />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin/editmodule/:id" element={<EditModule />} />
        <Route path="/admin/viewuser/:id" element={<ViewUser />} />
        <Route path="/admin/viewcoment/:id" element={<ViewComent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
