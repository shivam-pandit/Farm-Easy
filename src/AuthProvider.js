import React, { createContext, useEffect, useState } from "react";
import { auth, firestore } from "./Firebase";

export const authContext = createContext();

const AuthProvider=(props)=> {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let { uid, email } = user;
        let docRef = firestore.collection("user").doc(uid);

        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({
            email,
          });
        }

        setUser({ uid, email });
      } else {
        setUser(null);
      }

      // false means loging/logout  is done
      setLoading(false);
    });

    return () => {
      // works as cleanup function
      unsub();
    };
  }, []);

  return (
    <authContext.Provider value={user}>
      {!loading && props.children}
    </authContext.Provider>
  );
}

export default AuthProvider;
