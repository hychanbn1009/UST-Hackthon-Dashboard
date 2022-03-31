import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/home/Homepage";
import UserList from "./pages/userList/UserList";
import "./app.css"
import {Routes,Route,} from "react-router-dom";
import { useState } from "react";
import DataSummary from "./pages/summary/DataSummary";

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
            <Route path="/summary" element={<DataSummary/>}/>
            <Route path="/department" element={<UserList/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
