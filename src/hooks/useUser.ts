import { onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { User } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return { user, isLoading: user === undefined };
};

export default useUser;
