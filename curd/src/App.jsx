import Navbar from "./Components/Navbar"
import Logo from "./Components/Logo"
import Adduser from "./Components/Adduser";
import AllUser from "./Components/AllUser";
import EditUser from "./Components/EditUser";
import { BrowserRouter, Routes, Route }  from "react-router-dom"



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/allusers" element={<AllUser />} />
        <Route path="/adduser" element={<Adduser/>} />
        <Route path="/edituser/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
