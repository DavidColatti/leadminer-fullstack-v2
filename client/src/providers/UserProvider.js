import React, { useState, createContext, useEffect } from "react";
import { auth } from "../config/Fire";

export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth?.providerData[0]);
    });
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
