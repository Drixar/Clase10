import mongoose from "mongoose";

//definir la collecion
const chatCollection = "chat";

//definir el esquema
export const chatSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    timestamp:{
        type: String,
        required: true
    }
})

//generamos el modelo
// export const chatModel = mongoose.model(chatCollection, chatSchema);


