import express from "express"
import cors from "cors"



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://muhammadhassan6948:<db_password>@cluster0.t4eaf.mongodb.net/?