import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/home/Homepage";
import UserList from "./pages/userList/UserList";
import "./app.css"
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div class="App">
      <Header/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/users" element={<UserList/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
