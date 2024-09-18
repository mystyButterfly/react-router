import React , {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
const About = lazy(()=>import("./components/About"))
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Settings from "./components/Settings";
import Product from "./components/Product";
import Profile from "./components/settingPages/SettingProfile";
import Security from "./components/settingPages/SettingSecurity";
import NavbarMain from "./components/NavbarMain";
import Fetch from "./components/fetchAxios/Fetch"

function App() {
  return (
    <Router>
      <NavbarMain />
      <Suspense fallback={<h2>Loading ...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="settings" element={<Settings />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Route>
        <Route path="*" element={<h2>NotFound</h2>} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
