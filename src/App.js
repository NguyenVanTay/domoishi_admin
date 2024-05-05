/** @format */

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "./pages";
import useToken from "./helpers/token";
import { path } from "./utils/constant";
function App() {
  // const [token, setToken] = useToken();

  // if(!token){
  //   return <LoginPage
  // }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />

          <Route path={path.LOGIN} element={<LoginPage />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-center" autoClose={1000} />
    </div>
  );
}

export default App;
