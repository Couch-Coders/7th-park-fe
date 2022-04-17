import React, { useEffect, useState, useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../service/firebase';

export const AuthContext = React.createContext();

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export default function AuthProviders({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser, 'AuthProviders');
  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        //  setCurrentUser(user);
        // 토큰을 가져온다.
        const token = await user.getIdToken();
        console.log(token, 'AuthProvider Token');
        // Header에 인증 정보 추가
        defaultHeaders.Authorization = `Bearer ${token}`;
        // defaultHeaders.ID = user.email;
        // defaultHeaders.NickName = user.displayName;
        // 로그인 시도 (백엔드 API 구현 필요)
        const res = await fetch('/users/me', {
          method: 'GET',
          headers: defaultHeaders,
        });
        // console.log(res, ' res');
        // console.log(user, 'user');
        // const loginUser = await res.json();
        // 로그인 성공시 user를 넘겨줌
        if (res.status === 200) {
          const loginUser = await res.json();
          setCurrentUser(loginUser);

          console.log(loginUser, '로그인유저');
        }
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);

  const contextValue = useMemo(
    () => ({
      currentUser,
    }),
    [currentUser],
  );
  // const isCurrentUser = useMemo(() => ({ currentUser }), []);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
