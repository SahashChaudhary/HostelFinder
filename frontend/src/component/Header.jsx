import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";
import { resetLoginDetails } from "../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.user);
  // Check if the current location is the login page
  const isLoginPage = location.pathname === "/login";

  const handleLogout = () => {
    dispatch(resetLoginDetails());
    localStorage.clear();
    navigate("/");
    toast.success("logout successfully");
  };

  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="nav-title">
                Hostel Finder
              </Link>
            </Typography>

            {/* search bar here */}
            {!isLoginPage && (
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="search-input"
                  style={{ color: "black" }}
                />
                <button className="search-button">Search</button>
              </div>
            )}
            {isLoggedIn ? (
              <button className="nav-button" onClick={() => handleLogout()}>
                Logout
              </button>
            ) : (
              <Link to="/login" color="inherit">
                <button className="nav-button">Login</button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
