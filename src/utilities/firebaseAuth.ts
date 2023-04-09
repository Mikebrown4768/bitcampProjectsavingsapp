import { auth } from "./../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const { user } = await signInWithPopup(auth, provider);

  if (user) return user;

  return null;
};

export const logout = async () => {
  await auth.signOut();
};
