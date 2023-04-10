/* eslint-disable import/no-unresolved */
import "./setup.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Home from "@pages/Home";
import Rent from "@pages/Rent";
import CarDetail from "@pages/CarDetail";
import ProfilPage from "@pages/ProfilPage";
import OwnerCar from "@pages/OwnerCar";
import ContactUs from "@pages/ContactUs";
import Admin from "@pages/Admin";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Rent />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/fleet" element={<OwnerCar />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
