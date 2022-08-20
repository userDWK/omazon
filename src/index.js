import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/mainComponents/App";
import styleMain from "./css/main.module.css";
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7d248117abd95a5b234dee63f3ed3c7d"
></script>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App className={styleMain.App} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
