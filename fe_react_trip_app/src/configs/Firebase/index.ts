import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK-BHaPYcT_iPpsl4hMSRmRiwDJiCoNek",
  authDomain: "react-trip-app-caf0c.firebaseapp.com",
  databaseURL:
    "https://react-trip-app-caf0c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-trip-app-caf0c",
  storageBucket: "react-trip-app-caf0c.appspot.com",
  messagingSenderId: "118022025643",
  appId: "1:118022025643:web:820fe4e5277ca701d622ee",
  measurementId: "G-HSCJMKWD2V",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default firebaseConfig;
