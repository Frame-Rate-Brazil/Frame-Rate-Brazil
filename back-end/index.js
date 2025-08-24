/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs"

const app = express();
const {PORT} = process.env
const bcryptSalt = bcrypt.genSaltSync();

app.use(express.json())

// ______________________________________________________


app.get('/users', async (req, res) => {
    connectDb()
    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(404).json(error)
    }
})

app.post('/users', async (req, res) => {
    connectDb()

    const {name, email, password} = req.body
    const ecryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        const newUserDoc = await User.create({
          name,
          email,
          password: ecryptedPassword,
        });
        res.json(newUserDoc);
    } catch (error) {
        res.status(500).json(error);
    }
    
});



app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})