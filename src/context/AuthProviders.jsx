import React, { useEffect, useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebaseAuth";

export const AuthContext = React.createContext();

export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default function AuthProviders({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        // console.log(auth, "auth");
        // console.log(user, "user");
        // 토큰을 가져온다.
        const token = await user.getIdToken();

        // Header에 인증 정보 추가
        defaultHeaders.Authorization = `Bearer ${token}`;
        // 로그인 시도 (백엔드 API 구현 필요)
        const res = await fetch("/users/me", {
          method: "GET",
          headers: defaultHeaders,
        });

        localStorage.setItem("accessToken", `Bearer ${token}`);

        // 로그인 성공시 user를 넘겨줌
        if (res.status === 200) {
          const loginUser = await res.json();

          setCurrentUser(loginUser);

          console.log(loginUser, "로그인유저");
          // localStorage.setItem("key", "value");
          // localStorage.setItem("name", JSON.stringify(name));
        } else if (res.status === 404) {
          await fetch("/users", {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify({
              gId: user.email,
              uNickname: user.displayName,
              gImg: user.photoURL,
            }),
          });
        }
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
