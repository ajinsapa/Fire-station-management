/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "views/index-sections/SignUp";
import StaionLogin from "views/Station/StaionLogin";
import StationSignUp from "views/Station/StationSignUp";
import EmployeeLogin from "views/Employee/EmployeeLogin";
import ContactUsHeader from "views/ContactUs/ContactUsHeader";
import StationDashboard from "views/Station/StationDashboard";
import UserDashboard from "views/examples/UserDashboard";
import ListingEmployees from "views/Station/EmployeeManagement/ListingEmployees";
import TrainingList from "views/Station/TrainingMangement/TrainingList";
import TrainingVideoList from "views/Station/TrainingMangement/TrainingVideoList";
import IncidentPage from "views/Station/IncidentManagement/IncidentPage";
import IncidentList from "views/Station/IncidentManagement/IncidentList";
import TeamListing from "views/Station/TeamMnagement/TeamListing";
import TeamList from "views/Station/TeamMnagement/TeamList";
import VehicleList from "views/Station/VehicleList/VehicleList";
import EmployeeDashboard from "views/Employee/EmployeeDashboard";
import EmployeeTrainingList from "views/Employee/EmployeeTrainingList";
import UserIncident from "views/examples/UserIncident";
import StationEquipment from "views/Station/StationEquipment";
import ResourceMangement from "views/Station/IncidentManagement/ResourceMangement";
import Incident from "views/Station/IncidentManagement/Incident";
import EmployeeCart from "views/Employee/EmployeeCart";
import VehicleView from "views/Employee/VehicleView";
import EquipmentView from "views/Employee/EquipmentView";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/station-login" element={<StaionLogin />}></Route>
      <Route path="/station-signup" element={<StationSignUp />}></Route>
      <Route
        path="/employee-login"
        element={<EmployeeLogin></EmployeeLogin>}
      ></Route>
      <Route
        path="/contact"
        element={<ContactUsHeader></ContactUsHeader>}
      ></Route>
      <Route path="/station-dashboard" element={<StationDashboard />}></Route>
      <Route path="/user-dashboard" element={<UserDashboard />}></Route>
      <Route path="*" element={<Navigate to="/index" replace />} />
      <Route path="/listing-employees" element={<ListingEmployees />}></Route>
      <Route path="/training-list" element={<TrainingList />}></Route>
      <Route path="/video-list" element={<TrainingVideoList />}></Route>
      <Route path="/incident" element={<IncidentPage />}></Route>
      <Route path="/team-listing" element={<TeamListing />}></Route>
      <Route path="/incident-list/:id" element={<IncidentList />}></Route>
      <Route path="/team-list" element={<TeamList />}></Route>
      <Route path="/view-vehicle" element={<VehicleView />}></Route>
      <Route path="/view-equipment" element={<EquipmentView />}></Route>

      <Route path="/vehicle-list" element={<VehicleList />}></Route>
      <Route  path="employeevideo-list"  element={<EmployeeTrainingList/>} ></Route>
<Route  path="/employee-dash" element={      <EmployeeDashboard/> }    ></Route>
<Route  path="/user-incident" element={< UserIncident/>
} ></Route>
<Route path="/station-equipment" element={<StationEquipment/>} ></Route>
<Route path="/res-path" element={<ResourceMangement/>} ></Route>
<Route path="/incident-path" element={<Incident/>} ></Route>
<Route path="/cart" element={<EmployeeCart/>}  ></Route>
    </Routes>
  </BrowserRouter>
);
