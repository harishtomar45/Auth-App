import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../featurs/auth/authSlioce";

const Navbar = () => {

    const {user} = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser())
    }

  
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Link to={"/"}>Auth 2.0</Link>
        </Typography>
        {!user ? (
          <>
           <Link to={"/register"}>
           
           <Button variant="contained" color="secondary">
              Register
            </Button>
            </Link>
          <Link to={"/login"}>
          <Button
              variant="contained"
              color="success"
              sx={{ margin: "0px 10px" }}>
              Log In
            </Button>
            </Link>
          </>
        ) : (
          <Button variant="contained" color="error" onClick={handleLogout}>
            Log Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
