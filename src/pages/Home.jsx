import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
}

export default Home;
