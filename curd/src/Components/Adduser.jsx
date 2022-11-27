import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom"

const Conatiner = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;



const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const handelValueChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    await addUser(user)
    naviagte('/allusers')
  };

  const naviagte = useNavigate();

  return (
    <Conatiner>
      <Typography variant="h2">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handelValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => handelValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => handelValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => handelValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={handleClick}>
          Add User
        </Button>
      </FormControl>
    </Conatiner>
  );
};

export default Adduser;
