import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import SearchBar from "./SearchBar";

function Navbar() {
  const navigate = useNavigate()
  const logout  = ()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <h1 className="btn btn-ghost text-xl">LOGO</h1>
        </div>

        <div className="navbar-end">
          <button
            onClick={logout}
            className=" bg-black rounded-md px-3 py-3 hover:bg-slate-800 text-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar;
