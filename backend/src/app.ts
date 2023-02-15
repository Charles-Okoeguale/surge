import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json());

app.post("/signup", async (req : Request, res: Response, ) => {
   console.log(req.body)
})

app.listen("4000", () => console.log('server running'))