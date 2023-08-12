import { Link, Outlet } from "react-router-dom";

const ProfileComponent = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <aside
        style={{
          width: "20%",
        }}
      >
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/profile/edit">Edit Profile</Link>
          </li>
          <li>
            <Link to="/profile/courses">Courses</Link>
          </li>
          <li>
            <Link to="/profile/setting">Setting Profile</Link>
          </li>
        </ul>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileComponent;
