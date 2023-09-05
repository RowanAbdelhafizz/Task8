import "./App.css";
import axios from 'axios';
import Header from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import AboutUs from "./components/about us/about us";
import ContactUs from "./components/contact us/contact us";
import Products from "./components/products/products";
import Join from "./components/join/join";
import NotFound from "./components/not found/not found";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import ProductDetails from './components/product details/detail';

// backgroundColor
//camal case
function App() {
  return (
    <>
      <Header data={"app"} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/join" element={<Join />}>
            {/* Nesting Routes */}
            <Route path="" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
