import React, { useEffect, useState } from "react";
import { authService } from "../fbase";
import RouterApp from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
        setIsLoggedIn(true);
      }
    });
  }, []);
  return <RouterApp isLoggedIn={isLoggedIn} userObj={userObj} />;
}

export default App;
