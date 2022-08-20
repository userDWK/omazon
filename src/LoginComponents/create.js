import React, { useState } from "react";
import styleAccount from "../css/styleAccount.module.css";
import { authService, dbService } from "../fbase";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// uuidv4()
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    // if(name.length<=1)
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "rePassword") {
      setRePassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = checkError();
    if (errors) return;
    let data;
    try {
      data = await authService.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMsg(error.message);
    }
    const person = {
      name,
      email,
      createDate: Date.now(),
      createID: uuidv4(),
    };
    data = await dbService.collection("personality").add(person);
    setEmail("");
    setPassword("");
    setName("");
    setRePassword("");
    navigate("/");
  };
  const pushData = () => {};
  const checkError = () => {
    // const lowerCaseRegExp = /
    const id = email.split("@")[0];
    if (
      (/^[A-Za-z]{1,25}$/.test(name) &&
        /^[ㄱ-ㅎㅏ-ㅣ가-힣/]{1,25}$/.test(name)) ||
      !(
        /^[A-Za-z]{2,25}$/.test(name) || /^[ㄱ-ㅎㅏ-ㅣ가-힣/]{2,25}$/.test(name)
      )
    ) {
      setErrorMsg(
        "Please write your name with at least 2 English or Korean characters."
      );
      return true;
    } else if (!/^[A-Za-z0-9]{6,25}$/.test(id)) {
      setErrorMsg(
        "Email ID must be at least 6 characters in uppercase, lowercase, and numeric characters."
      );
      return true;
    } else if (password !== rePassword) {
      setErrorMsg("The password is different. Please check.");
      return true;
    }
    setErrorMsg("");
    return false;
  };
  return (
    <div className={`${styleAccount.mainBox} ${styleAccount.createBox}`}>
      <h2>Create account</h2>
      <div className={styleAccount.accountForm}>
        <form onSubmit={onSubmit}>
          <p>Your name</p>
          <input
            type="text"
            onChange={onChange}
            className={styleAccount.accountText}
            value={name}
            name="name"
            placeholder="Input your name..."
            maxLength={15}
          />
          <p>Email or mobile phone number</p>
          <input
            type="text"
            onChange={onChange}
            className={styleAccount.accountText}
            value={email}
            name="email"
            placeholder="Input your email..."
            maxLength={50}
          />
          <p>Password</p>
          <input
            type="password"
            onChange={onChange}
            className={styleAccount.accountText}
            value={rePassword}
            name="rePassword"
            placeholder="Input your password..."
            maxLength={20}
          />
          <p className={styleAccount.pvc}>
            <i className={`${styleAccount.ruleIcon} ${styleAccount.hIcon}`}></i>
            Passwords must be at least 6 characters.
          </p>
          <p>Re-enter password</p>
          <input
            type="password"
            onChange={onChange}
            className={styleAccount.accountText}
            value={password}
            name="password"
            placeholder="Input your password..."
            maxLength={20}
          />
          {errorMsg}
          <input
            type="submit"
            className={styleAccount.accountSub}
            value="continue"
          ></input>
          <div className={styleAccount.pvcBox}>
            <p className={styleAccount.pvc}>
              By creating an account, you agree to Amazon's
              <a href="#">
                {" "}
                <span>Conditions of Use</span>
              </a>{" "}
              and{" "}
              <a href="#">
                <span>Privacy Notice.</span>
              </a>
            </p>
          </div>
          <div className={`${styleAccount.intro} ${styleAccount.navBox}`}>
            <p className={styleAccount.help}>
              Already have an account?
              <a href="#">
                <span>Sign-In</span>
                <i
                  className={`${styleAccount.hIcon}  ${styleAccount.alarm}`}
                ></i>
              </a>
            </p>
            <p className={styleAccount.help}>
              Buying for work?
              <a href="#">
                <span>Create a free business account</span>
                <i
                  className={`${styleAccount.hIcon} ${styleAccount.alarm}`}
                ></i>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
