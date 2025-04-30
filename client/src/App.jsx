import { Route, Routes } from "react-router";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
