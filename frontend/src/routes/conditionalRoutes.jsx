import { Route, Routes } from "react-router";
import Home from "../pages/home/homepage";
import BoysHostel from "../pages/BoysHostel";
import GirlsHostel from "../pages/GirlsHostel";
import Register from "../container/auth/register";
import Login from "../container/auth/login";
import AddHostel from "../container/addHostel/addHostel";
import { useSelector } from "react-redux";

const ConditionalRoutes = () => {
  const { userRole } = useSelector((state) => state.user);
  if (userRole === "user") {
    return <UserRoutes />;
  } else {
    return <DefaulRoutes />;
  }
};
const DefaulRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/boys-hostel" element={<BoysHostel />} />
      <Route path="/girls-hostel" element={<GirlsHostel />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boys-hostel" element={<BoysHostel />} />
      <Route path="/girls-hostel" element={<GirlsHostel />} />
      <Route path="/add_hostel" element={<AddHostel />} />
    </Routes>
  );
};

export default ConditionalRoutes;
