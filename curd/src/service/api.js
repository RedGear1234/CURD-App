import axios from "axios"
const URL = "http://localhost:8000";


export const addUser = async (user) =>{
   try {
    await axios.post(`${URL}/add`, user)
   } catch (error) {
     console.log("add user api", error)
   }
}

export  const getUsers = async () =>{
    try {
     return await axios.get(`${URL}/all`);
    } catch (error) {
      console.log(`Error while Calling getUsers`, error)
    }

}

export const getUser = async (_id)=>{
  try {
    return await axios.get(`${URL}/${_id}`)
  } catch (error) {
    console.log("error while calling user details", error)
  }
}

export const editUser = async (user ,_id)=>{
  try {
    return await axios.put(`${URL}/${_id}`, user)
  } catch (error) {
    console.log("error while calling edit details", error)
  }
}


export const deleteUser = async ( _id) => {
  try {
    return await axios.delete(`${URL}/${_id}`);
  } catch (error) {
    console.log("error while calling delete details", error);
  }
};