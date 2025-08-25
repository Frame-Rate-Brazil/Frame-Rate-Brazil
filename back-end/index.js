/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from "express";
import "dotenv/config";
import UserRoutes from "./domains/users/routes.js"


const app = express();
const {PORT} = process.env


app.use(express.json())
app.use('/users', UserRoutes)

//_______________________________________________________
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})