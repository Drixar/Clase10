import mongoose from "mongoose";

//definir la collecion
const chatCollection = "chat";

//definir el esquema
export const cartSchema = new mongoose.Schema({
    carritoTimestamP:{
        type: String,
        required: true
    },
    producto: [
        {
          productoTimestamP: {
            type: String,
            required: true
        },
          id: {
            type: String,
            required: true
          },
          title: {
            type: String,
            required: true
        },
          price: {
            type: Number,
            required: true
        },
          thumbnail: {
            type: String,
            required: true
        },
        }
      ]
})




//generamos el modelo
// export const chatModel = mongoose.model(chatCollection, chatSchema);


