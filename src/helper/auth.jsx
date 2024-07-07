export const login = async ({ email, password }) => {
  console.log({ email, password }, "formdata");

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage += `, message: ${errorData.error}`;
      } catch (jsonError) {
        
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
   
    console.error("Error during login:", error);
    throw error;
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", JSON.stringify(data));
    next();
  }
};

import React from "react";
import {  Navigate, Outlet} from "react-router-dom";

export const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("token"); 

  return (
   isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
  );
};


