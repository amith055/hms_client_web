"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/lib/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import type { Hostel } from "@/lib/types";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

type AuthContextType = {
  user: User | null;
  hostel: Hostel | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  hostel: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [hostel, setHostel] = useState<Hostel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const hostelRef = doc(db, "hostels", user.uid);
        const hostelSnap = await getDoc(hostelRef);
        if (hostelSnap.exists()) {
          setHostel({ id: hostelSnap.id, ...hostelSnap.data() } as Hostel);
        } else {
          setHostel(null);
        }
      } else {
        setUser(null);
        setHostel(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, hostel, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
