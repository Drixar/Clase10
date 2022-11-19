import mongoose from "mongoose";

//definir la collecion
const chatCollection = "chat";

//definir el esquema
export const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    }
})

//generamos el modelo
// export const chatModel = mongoose.model(chatCollection, chatSchema);


