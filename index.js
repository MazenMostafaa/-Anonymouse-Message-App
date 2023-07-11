import express from "express";

import userRouter from './Modules/userModule/user.route.js'
import postRouter from './Modules/postModule/post.route.js'

import { connectDB } from "./DB/connection.js";

const app = express();
const port = 3000
connectDB()



app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: "welcome" })
})

app.use('/users', userRouter)
app.use('/posts', postRouter)




app.listen(port, () => {
    console.log(`.....Server started on ${port}`);
});