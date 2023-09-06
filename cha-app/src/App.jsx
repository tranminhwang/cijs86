import "./App.css";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { FirebaseContext } from "./context/FirebaseProvider";
import { useContext, useEffect, useState } from "react";
import { Spinner, Button } from "@nextui-org/react";

import MessagePage from "./components/MessagePage";

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { googleProvider } = useContext(FirebaseContext);

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return user ? (
    <MessagePage />
  ) : (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button color="primary" onClick={loginWithGoogle}>
        Login With Google
      </Button>
    </div>
  );
}

export default App;
