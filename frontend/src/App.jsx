import "./App.css";
import Home from "./pages/homepage";
import Login from "./container/auth/login";
import Register from "./container/auth/register";
import { Route, Routes } from "react-router-dom";
import AddHostel from "./container/addHostel/addHostel";
import BoysHostel from "./pages/BoysHostel";
import GirlsHostel from "./pages/GirlsHostel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/boys-hostel" element={<BoysHostel />} />
        <Route path="/girls-hostel" element={<GirlsHostel />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_hostel" element={<AddHostel />} />
      </Routes>
    </div>
  );
}

export default App;
