import express, {Request, Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { googleModel, userModel } from './ models';


const app = express()
app.use(cors())
app.use(express.json());
app.use(cookieParser());
mongoose.set('strictQuery', false)

const DB_URL = "mongodb://Charles-Eguale:14032001@ac-bpx1amm-shard-00-00.lxhxkxl.mongodb.net:27017,ac-bpx1amm-shard-00-01.lxhxkxl.mongodb.net:27017,ac-bpx1amm-shard-00-02.lxhxkxl.mongodb.net:27017/?ssl=true&replicaSet=atlas-6evcxt-shard-0&authSource=admin&retryWrites=true&w=majority"

app.post("/googlesignup", async (req : Request, res: Response, ) => {
    console.log(req.body)
    const {email} = req.body
    const data = new googleModel({
        email : email,
        password : null
    })
    const val = await data.save()
    res.json(val)
})
app.post("/signup", async (req : Request, res: Response, ) => {
    console.log(req.body);
    const {username, email, password} = req.body
    const data = new userModel({
        username: username,
        email: email,
        password: password
    })
    const val = await data.save()
    res.json(val)
})

async function connect () {
    try {
        await mongoose.connect(DB_URL)
        console.log("connected to database")
    } catch (error) {
        console.log(error) 
    }
}

connect()

app.listen(8000, () => console.log("server running on port 8000"))

