import { Route, Routes } from "react-router";

import ScrollToTop from "./components/ScrollToTop";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import Layout from "./layouts/Layout";
import {
  DownloadMobileAppPage,
  HelpCenterPage,
  HomePage,
  HostPage,
  HotelDetailsPage,
  LogInPage,
  PropertyPage,
  RentalGuidesPage,
  SearchResultPage,
  ShareStoriesPage,
  SignUpPage,
} from "./pages";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={"/download-mobile-app"}
            element={<DownloadMobileAppPage />}
          />
          <Route path={"/find-property"} element={<PropertyPage />} />
          <Route path={"/rental-guides"} element={<RentalGuidesPage />} />
          <Route path={"/share-stories"} element={<ShareStoriesPage />} />
          <Route path={"/help-center"} element={<HelpCenterPage />} />
          <Route path={"/host"} element={<HostPage />} />
          <Route path={"/search-result"} element={<SearchResultPage />} />
          <Route path={"/hotel/:hotelName"} element={<HotelDetailsPage />} />
        </Route>
        <Route element={<AuthenticationLayout />}>
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route path={"/login"} element={<LogInPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
