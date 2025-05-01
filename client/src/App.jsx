import { Route, Routes } from "react-router";

import Layout from "./layouts/Layout";
import {
  DownloadMobileAppPage,
  HelpCenterPage,
  HomePage,
  HostPage,
  LogInPage,
  PropertyPage,
  RentalGuidesPage,
  ShareStoriesPage,
  SignUpPage,
} from "./pages";

const App = () => {
  return (
    <>
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
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route path={"/login"} element={<LogInPage />} />
          <Route path={"/help-center"} element={<HelpCenterPage />} />
          <Route path={"/host"} element={<HostPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
