import React, { useEffect, useState, useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../service/firebase';

export const AuthContext = React.createContext();

export default function AuthProviders({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
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
