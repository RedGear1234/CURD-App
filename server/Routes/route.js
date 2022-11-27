import  express  from "express"
import {
  getUsers,
  getUser,
  editUser,
  deleteUser,
} from "../Controller/userController.js";
import  addUser from "../Controller/userController.js";
const router = express.Router()


router.post('/add', addUser)
router.get('/all', getUsers)
router.get('/:id',getUser)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)





export default router