import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Platform from "./pages/Platform.jsx";
import BookCall from "./pages/BookCall.jsx";
import VideoConsoltation from "./pages/VideoConsoltation.jsx";
import OnlinePayment from "./pages/OnlinePayment.jsx";
import NotFound from "./pages/NotFound.jsx";
import FamilyHealthProfile from "./pages/FamilyHealthProfile.jsx";
import Language from "./pages/Language.jsx";
import HealthRecord from "./pages/HealthRecord.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
import PatientPannel from "./pages/PatientPannel.jsx";
import AppointmentBooking from "./pages/AppointmentBooking.jsx";
import ServiceListing from "./pages/ServiceListing.jsx";
import TokenTracking from "./pages/TokenTracking.jsx";
import TimesSlots from "./pages/TimesSlots.jsx";
import PlanDoctor from "./pages/PlanDoctor.jsx";
import ManageAppointments from "./pages/ManageAppointments.jsx";


const route = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookcall" element={<BookCall />} />
          <Route path="/video" element={<VideoConsoltation />} />
          <Route path="/payment" element={<OnlinePayment/>}/>
          <Route path="/family-health" element={<FamilyHealthProfile/>}/>
          <Route path="/language" element={<Language/>} />
          <Route path="/health-record" element={<HealthRecord/>}/>
          <Route path="/doctor" element={<DoctorProfile/>}/>
          <Route path="/patient" element={<PatientPannel/>}/>
          <Route path="/appointment" element={<AppointmentBooking/>}/>
          <Route path="/service-listing" element={<ServiceListing/>}/>
          <Route path="/token" element={<TokenTracking/>}/>
          <Route path="/times" element={<TimesSlots/>}/>
          <Route path="/plan-doctor" element={<PlanDoctor/>} />
          <Route path="/manage-appointment" element={<ManageAppointments/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
