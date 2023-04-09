import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI2ESp5L-W6IIFP2uZwETu5mXeTGr2y74",
  authDomain: "invest-now-bitcamp.firebaseapp.com",
  databaseURL: "https://invest-now-bitcamp-default-rtdb.firebaseio.com",
  projectId: "invest-now-bitcamp",
  storageBucket: "invest-now-bitcamp.appspot.com",
  messagingSenderId: "347064906604",
  appId: "1:347064906604:web:bbb8be25d004fd98de3949",
  measurementId: "G-1VP8EKDFGW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
