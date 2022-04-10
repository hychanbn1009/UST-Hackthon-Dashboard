import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import Homepage from "./pages/company/Homepage"
import "./app.css";
import {Routes,Route,} from "react-router-dom";
import { useState } from "react";
import DataSummary from "./pages/summary/DataSummary";
import Client from "./pages/client/Client";
import Department from "./pages/department/Department"

function App() {

  const [togglerSideBar,setTogglerSideBar] =useState(false)

  const closeSidebar=()=>{
    if(togglerSideBar==true){
      setTogglerSideBar(false)
    }
  }

  return (
    <div className="app">
      <Header 
      togglerSideBar={togglerSideBar}
      setTogglerSideBar={setTogglerSideBar}
      />
      <div className="container">
        <Sidebar
        togglerSideBar={togglerSideBar}
        setTogglerSideBar={setTogglerSideBar}
        />
        <div className="mainpage" onClick={()=>closeSidebar()}>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="client" element={<Client/>}/>
            <Route path="company/department" element={<Department/>}/>
            <Route path="company/summary" element={<DataSummary/>}/>
            <Route path="client/summary" element={<DataSummary/>}/>
            <Route path="client/list" element={<UserList/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
