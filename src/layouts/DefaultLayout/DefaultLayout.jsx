/** @format */

import { Routes, Route } from "react-router-dom";

import PrivateLayout from "../PrivateLayout/PrivateLayout";
import PublicLayout from "../PublicLayout/PublicLayout";
import PublicRoute from "../../utils/PublicRoute";
import PrivateRoute from "../../utils/PrivateRoute";

const DefaultLayout = (props) => {
  //Routes
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  return (
    <>
      {/* <Header />
      <Routes>{showContentMenu(routes)}</Routes>
      <Footer /> */}
      <Routes>
        <Route element={<PublicLayout />}>{showContentMenu(PublicRoute)}</Route>

        <Route element={<PrivateLayout />}>
          {showContentMenu(PrivateRoute)}
        </Route>
      </Routes>
    </>
  );
};

export default DefaultLayout;
