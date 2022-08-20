import React, { useState } from "react";
import styleHome from "../css/styleHome.module.css";
import H_header from "../homeComponents/H_header";

const MainPage = () => {
  return (
    <div className={styleHome.homeContainer}>
      <H_header />
    </div>
  );
};

export default MainPage;
