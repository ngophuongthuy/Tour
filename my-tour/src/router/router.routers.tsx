// router.routers.ts
import HomeCustomer from "../components/layout/components/HomeCustomer";
import HealingTravel from "../components/layout/components/Blog/News/HealingTravel";
import Blog from "../components/layout/components/Blog";

import Contact from "../components/layout/components/Contact";
import TourManagement from "../components/admin/components/TourManagement";
import BookingManagement from "../components/admin/components/BookingManagement";
import PaymentManagement from "../components/admin/components/PaymentManagement";

import PostManagement from "../components/admin/components/PostManagement";
import CustomerManagement from "../components/admin/components/CustomerManagement";
import { IRoute } from "../interfaces/router";
import {
  PATH_BASE,
  PATH_BLOG,
  PATH_BLOG_HEALING,
  PATH_BOOKING,
  PATH_CONTACT,
  PATH_CUSTOMER,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_HOME_CUSTOMER,
  PATH_PATMENT,
  PATH_POST,
  PATH_TOUR,
  PATH_CONTACT_ADMIN,
  PATH_NAM,
  PATH_BAC,
  PATH_TRUNG,
  PATH_BOOKING_TOUR,
  PATH_BLOG_LOCATION_DANANG,
  PATH_BLOG_LOCATION_HANOI,
  PATH_BLOG_LOCATION_VINHHALONG,
  PATH_BLOG_LOCATION_HCM,
  PATH_BLOG_LOCATION_DALAT,
  PATH_BLOG_LOCATION_NINHBINH,
  PATH_BLOG_LOCATION_SAPA,
  PATH_BLOG_LOCATION_PHUQUOC,
  PATH_BLOG_LOCATION_HUE,
  PATH_BLOG_12T,
  PATH_POST_DETAILS,
} from "./router.paths";
import Login from "../components/layout/components/Account/Login";
import Register from "../components/layout/components/Account/Register";
import Bac from "../components/layout/components/Destination/MienBac";
import Trung from "../components/layout/components/Destination/MienTrung";
import Nam from "../components/layout/components/Destination/MienNam";

import BookingTour from "../components/layout/components/Booking";
import DaNang from "../components/layout/components/Blog/Location/DaNang";
import HN from "../components/layout/components/Blog/Location/HN";
import HCM from "../components/layout/components/Blog/Location/HCM";
import VinhHaLong from "../components/layout/components/Blog/Location/VinhHaLong";
import DaLat from "../components/layout/components/Blog/Location/DaLat";
import NinhBinh from "../components/layout/components/Blog/Location/NinhBinh";
import SaPa from "../components/layout/components/Blog/Location/Sapa";
import PhuQuoc from "../components/layout/components/Blog/Location/PhuQuoc";
import Hue from "../components/layout/components/Blog/Location/Hue";
import CamNang12T from "../components/layout/components/Blog/12T";
import ContactManagement from "../components/admin/components/ContactMangement";
import PostDetails from "../components/layout/components/Blog/Post";

export const UserRoutes: IRoute[] = [
  { path: PATH_BASE, element: <HomeCustomer /> },
  { path: PATH_HOME_CUSTOMER, element: <HomeCustomer /> },
  { path: PATH_BLOG, element: <Blog /> },
  { path: PATH_BLOG_HEALING, element: <HealingTravel /> },
  { path: PATH_CONTACT, element: <Contact /> },
  { path: PATH_BOOKING_TOUR, element: <BookingTour /> },
  { path: PATH_LOGIN, element: <Login /> },
  { path: PATH_REGISTER, element: <Register /> },
  { path: PATH_BAC, element: <Bac /> },
  { path: PATH_TRUNG, element: <Trung /> },
  { path: PATH_NAM, element: <Nam /> },
  { path: PATH_BLOG_LOCATION_DANANG, element: <DaNang /> },
  { path: PATH_BLOG_LOCATION_HANOI, element: <HN /> },
  { path: PATH_BLOG_LOCATION_HCM, element: <HCM /> },
  { path: PATH_BLOG_LOCATION_VINHHALONG, element: <VinhHaLong /> },
  { path: PATH_BLOG_LOCATION_DALAT, element: <DaLat /> },
  { path: PATH_BLOG_LOCATION_NINHBINH, element: <NinhBinh /> },
  { path: PATH_BLOG_LOCATION_SAPA, element: <SaPa /> },
  { path: PATH_BLOG_LOCATION_PHUQUOC, element: <PhuQuoc /> },
  { path: PATH_BLOG_LOCATION_HUE, element: <Hue /> },
  { path: PATH_BLOG_12T, element: <CamNang12T /> },
  { path: PATH_POST_DETAILS, element: <PostDetails /> },
];

export const adminRoutes: IRoute[] = [
  { path: PATH_TOUR, element: <TourManagement /> },
  { path: PATH_CUSTOMER, element: <CustomerManagement /> },
  { path: PATH_BOOKING, element: <BookingManagement /> },
  { path: PATH_PATMENT, element: <PaymentManagement /> },
  { path: PATH_POST, element: <PostManagement /> },
  { path: PATH_CONTACT_ADMIN, element: <ContactManagement /> },
];
