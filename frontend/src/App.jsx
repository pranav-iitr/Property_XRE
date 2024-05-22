import ForgotPassword from "./components/common/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import Properties from "./pages/Properties";
import People from "./pages/People";
import AppHeader from "./components/common/AppHeader";
import AppBreadCrumb from "./components/common/AppBreadCrumb";
import AddNewProperty from "./pages/AddNewProperty";
import PrivateRoutes from "./layouts/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Proposals from "./pages/Proposals";
import ReportingAnalytics from "./pages/ReportingAnalytics";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/properties" element={
        <PrivateRoutes>
          <AppHeader />
          <AppBreadCrumb />
          <Properties />
        </PrivateRoutes>
      } />
      <Route path="/property/add-new" element={
        <PrivateRoutes>
          <AppHeader />
          <AppBreadCrumb />
          <AddNewProperty />
        </PrivateRoutes>
      } />
      <Route path="/people" element={
        <PrivateRoutes>
          <AppHeader />
          <AppBreadCrumb />
          <People />
        </PrivateRoutes>

      } />
      <Route path="/dashboard" element={
        <PrivateRoutes>
          <AppHeader />
          <AppBreadCrumb />
          <Dashboard />
        </PrivateRoutes>

      } />
      <Route path="/proposals" element={
        <PrivateRoutes>
          <AppHeader />
          <AppBreadCrumb />
          <Proposals />
        </PrivateRoutes>

      } />
      <Route path="/reporting" element={
        <PrivateRoutes>
          <AppHeader />
          <AppBreadCrumb />
          <ReportingAnalytics />
        </PrivateRoutes>
      } />
    </Routes>
  );
}

export default App;
