import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";  
import User from "./Components/User/User";
import AddUser from "./Components/AddUser/AddUser";
import Users from "./Components/UserDetails/Users";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Contactus from "./Components/ContactUs/Contactus";
import SendPdf from "./Components/SendPdf/SendPdf";
import Imguploder from "./Components/Imguploder/Imguploder";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/user" element={<User />} />
          <Route path="/userdetails" element={<Users />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/log" element={<Login />} />
          <Route path="/sendpdf" element={<SendPdf />} />
          <Route path="/imgpart" element={<Imguploder />} />
          <Route path="/conus" element={<Contactus />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
