import express, {Request, Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors())
app.use(express.json());
app.use(cookieParser());
mongoose.set('strictQuery', false)

const DBURI = "mongodb+srv://Charles-Eguale:14032001@cluster0.lxhxkxl.mongodb.net/?retryWrites=true&w=majority"

app.post("/signup", async (req : Request, res: Response, ) => {
    console.log(req.body)
})

// async function connect () {
//     try {
//         await mongoose.connect(DBURI)
//         console.log("connected to database")
//     } catch (error) {
//         console.log(error)
//     }
// }

// connect()

app.listen(8000, () => console.log("server running on port 8000"))

