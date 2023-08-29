import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUXSFcq1FTsApRIN0PANdZJeAMLd9dkOE",
  authDomain: "chat-app-92828.firebaseapp.com",
  projectId: "chat-app-92828",
  storageBucket: "chat-app-92828.appspot.com",
  messagingSenderId: "101183132467",
  appId: "1:101183132467:web:d9448c701cb36fbd93a446",
};

const app = initializeApp(firebaseConfig);

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const db = getFirestore(app);
  const msgCollection = collection(db, "messages");
  const googleProvider = new GoogleAuthProvider();

  return (
    <FirebaseContext.Provider
      value={{
        app,
        msgCollection,
        googleProvider,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
