import  express  from "express"
import Connection from "./database/db.js"
import dotenv from "dotenv"
import router from "./Routes/route.js"
import cors from "cors"
import bodyParser from "body-parser";


const app = express()

dotenv.config()
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username, password);

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors())
app.use('/', router)



const port = 8000
app.listen(port, ()=>{
    console.log(`Connected to ${port}`)
})