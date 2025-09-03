import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";


const bcryptSalt = bcrypt.genSaltSync();
const router = Router();


router.get("/", async (req, res) => {
  connectDb();
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  connectDb();

  const { name, email, password } = req.body;
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

router.post("/login", async (req, res)=>{
  connectDb()
  const {email, password} = req.body;

  try {
    const userDoc = await User.findOne({email: email})
    const passwordCorrect = bcrypt.compareSync(password, userDoc.password)

    passwordCorrect ? res.json(userDoc) : res.json("senha invalida")

  } catch (error) {
    res.status(500).json(error)
  }
  

})

export default router;