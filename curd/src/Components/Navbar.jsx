import React from 'react'
import { NavLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material";


const Header = styled(AppBar)`background: black`

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 2rem;
  list-styles: none;
  text-decoration: none;
  color: white;
`;



const Navbar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
            <Tabs to="/">Logo</Tabs>
            <Tabs to="/allusers">All Users</Tabs>
            <Tabs to="/adduser">Add Users</Tabs>
        </Toolbar>
      </Header>
    </>
  );
}

export default Navbar