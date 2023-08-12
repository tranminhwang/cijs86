import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      // redirect to login page
      // window.location.href = "/sign-in";
      // console.log("navigate ababa", navigate);
      navigate("/sign-in");
    }
  }, []);

  return (
    <div>
      <h1>Hello from HomeComponent</h1>
      <button>
        <Link to="/profile">view profile</Link>
      </button>
    </div>
  );
};

export default HomeComponent;
