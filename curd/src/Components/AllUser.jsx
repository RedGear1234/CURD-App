import React,{useEffect, useState} from 'react'
import { getUsers, deleteUser } from "../service/api.js"
import {Link} from "react-router-dom"
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button,
} from "@mui/material";






const AllUser = () => {

   const [users, setUsers] = useState([])

 useEffect(() => {
  getAllUsers();
 }, [])
 
 const getAllUsers = async () =>{
   let res = await getUsers()
   setUsers(res.data)
 }

 const deleteUserDetails = async(_id, e) =>{
     await deleteUser(_id)
     getAllUsers()
 }


  return (
    <>
      <Table id="Table">
        <TableHead>
          <TableRow id="tablerow">
            <TableCell id="tablecell">ID</TableCell>
            <TableCell id="tablecell">Name</TableCell>
            <TableCell id="tablecell">UserName</TableCell>
            <TableCell id="tablecell">Phone</TableCell>
            <TableCell id="tablecell">Email</TableCell>
            <TableCell id="tablecell"></TableCell>
            <TableCell id="tablecell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    LinkComponent={Link}
                    to={`/edituser/${user._id}`}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "red" }}
                    onClick={() => deleteUserDetails(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default AllUser