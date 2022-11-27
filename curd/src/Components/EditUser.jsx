import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { addUser, getUsers } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import  { getUser , editUser} from "../service/api.js"

const Conatiner = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {

    
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

  const handleEdit = async () => {
    await editUser(user, id);
    naviagte("/allusers");
  };

  const naviagte = useNavigate();

  useEffect(() => {
    loadUserDetails()
  }, [])
  
const { id } = useParams()

const loadUserDetails = async() =>{
   const response = await getUser(id)
   setUser(response.data)
}






  return (
    <Conatiner>
      <Typography variant="h2">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => handelValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          onChange={(e) => handelValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => handelValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => handelValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={handleEdit}>
          Edit User
        </Button>
      </FormControl>
    </Conatiner>
  );
};

export default EditUser;
