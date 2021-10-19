import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Firebase from "../../../context/firebase";

export const AuthContext = createContext([]);

const auth = Firebase.auth();
const userDataKey = "@markertList:user";

function Provider({ children }) {
  const [userState, setUserState] = useState({});
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  async function signIn(email, password) {
    try {
      let result = await auth.signInWithEmailAndPassword(email, password);

      const userLogged = {
        id: result.user.uid,
        email: result.user.email,
      };

      setUserState(userLogged);
      console.log(userState);

      await AsyncStorage.setItem(userDataKey, JSON.stringify(userState));
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const data = await AsyncStorage.getItem(userDataKey);

      if (data) {
        setUserState(JSON.parse(data));
      }
      setUserStorageLoading(false);
    }
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userState,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { Provider, useAuth };
