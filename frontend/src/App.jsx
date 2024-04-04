import ForgotPassword from './components/ForgotPassword';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from "react-router-dom";
import Properties from './pages/Properties';
import People from './pages/People';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/property" element={<Properties />} />
      <Route path="/people" element={<People />} />
    </Routes>
  )
}

export default App
