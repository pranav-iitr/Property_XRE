import ForgotPassword from "./components/common/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import Properties from "./pages/Properties";
import People from "./pages/People";
import AppHeader from "./components/common/AppHeader";
import AppBreadCrumb from "./components/common/AppBreadCrumb";
import AddNewProperty from "./pages/AddNewProperty";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/property" element={<>
            <AppHeader />
            <AppBreadCrumb />
            <Properties />
          </>
      }/>
      <Route path="/property/add-new" element={<>
            <AppHeader />
            <AppBreadCrumb />
            <AddNewProperty />
          </>
      }/>
      <Route path="/people" element={<>
        <AppHeader />
        <AppBreadCrumb />
        <People />
        </>
      }/>
    </Routes>
  );
}

export default App;
