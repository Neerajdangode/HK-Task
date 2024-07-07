import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { PrivateRoutes } from "./helper/auth";



function App() {
 
  return (
    <>
      <div>
     <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              element={
                <PrivateRoutes/>
                
              }
            />
             <Route element={<Home/>} path="/" exact></Route>
          </Routes>
     </BrowserRouter>
      </div>
    </>
  );
}

export default App;
