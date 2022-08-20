import React, { useState } from "react";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";
import EmailMain from "./emailMain";
import PasswordMain from "./passwordMain";
import { Link } from "react-router-dom";

const LoginMain = ({ isEmail, setIsEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <div className={styleAccount.mainBox}>
        {!isEmail ? (
          <EmailMain
            email={email}
            setEmail={setEmail}
            setIsEmail={setIsEmail}
          />
        ) : (
          <PasswordMain
            password={password}
            setPassword={setPassword}
            email={email}
            setIsEmail={setIsEmail}
          />
        )}
      </div>
    </main>
  );
};
export default LoginMain;
