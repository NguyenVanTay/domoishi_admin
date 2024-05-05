/** @format */

import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
function PublicLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default PublicLayout;
