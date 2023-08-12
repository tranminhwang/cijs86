import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import ProductListComponent from "./ProductListComponent";
import ProductDetailComponent from "./ProductDetailComponent";
import ProfileComponent from "./ProfileComponent";
import ProfileSetting from "./ProfileSetting";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/profile" element={<ProfileComponent />}>
            <Route index element={<h1>Hello from profile componet</h1>} />
            <Route
              path="edit"
              element={<h1>Hello from profile componet - edit</h1>}
            />
            <Route
              path="courses"
              element={<h1>Hello from profile componet - courses</h1>}
            />
            <Route path="setting" element={<ProfileSetting />}>
              <Route index element={<h1>Hello from profile setting</h1>} />
              <Route
                path="abc"
                element={<h1>Hello from profile setting - abc component</h1>}
              />
            </Route>
          </Route>

          <Route path="/products" element={<ProductListComponent />} />
          <Route
            path="/products/:productId"
            element={<ProductDetailComponent />}
          ></Route>
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
localhost:3000/ -> HomeComponent
localhost:3000/about -> AboutComponent
localhost:3000/products
localhost:3000/products/1
localhost:3000/contact -> ContactComponent
localhost:3000/sign-in -> 
localhost:3000/sign-up ->


*/
