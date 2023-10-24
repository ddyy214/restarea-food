import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios"; // axios를 import

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // 세션을 확인하고 로그인 상태를 설정하는 함수
  const session = () => {
    axios({
      url: "http://localhost:5000/session",
      method: "GET",
      withCredentials: true,
    });
  };

  // 로그아웃 함수
  const logout = () => {
    axios({
      url: "http://localhost:5000/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        setIsLogin(false);
      }
    });
  };

//   useEffect(() => {
//     // 로그인 상태 확인
//     axios({
//       url: "http://localhost:5000/user/getUserEmail",
//       method: "get",
//       withCredentials: true,
//     }).then((result) => {
//       if (result.data.userEmail) {
//         setIsLogin(true);
//       }
//     });
//   }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, session, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
