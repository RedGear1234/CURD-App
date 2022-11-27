import User from "../Schema/user-schema.js"


const addUser =  async (req, res) =>{
    const user = req.body
    const newUser = new User(user)

    try {
      await newUser.save()
      res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message : error.message })
        console.log(error , "data not added")
    }
}

export default addUser


export const getUsers = async (req, res) =>{
  try {
  const users =  await User.find({})
   res.status(200).json(users)
  } catch (error) {
    res.status(404).json({message : error.message})
  }
}


export const getUser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};


export const editUser = async (request, response) => {
  let user = request.body
  const editUser = new User(user)
  try {
    await User.updateOne({_id:request.params.id}, editUser)
    response.status(200).json(editUser);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};


export const deleteUser = async (request, response) => {

  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(200).json({message : 'user deleted'});
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};