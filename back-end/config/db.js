import "dotenv/config"
import mongoose from "mongoose";

const {MONGO_URL} =  process.env;


export const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Deu certo ao conectar com o banco de dados")
    } catch (error) {
        console.log("Não deu certo !", error);
    }
    
}