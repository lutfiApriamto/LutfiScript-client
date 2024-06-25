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
        <Route path="/lutfiscript/materi" element={<MateriPage />} />
        <Route path="/lutfiscript/quiz" element={<Quiz />} />

        <Route path="/admin" element={<MainAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
