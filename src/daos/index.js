import mongoose from "mongoose";
import {options} from "../config/dbconfig.js";

let ContenedorDaoProductos;
let ContenedorDaoCarritos;
let ContenedorDaoChat;


//identificador
let databaseType = "mongo";

switch(databaseType){
    case "archivos":
        const {ProductsDaoArchivos} = await import("./products/productsFiles.js");
        const {CartsDaoArchivos} = await import("./carts/cartsFiles.js");
        const {ChatDaoArchivos} = await import("./chat/chatFiles.js");
        ContenedorDaoProductos = new ProductsDaoArchivos(options.fileSystem.pathProducts);
        ContenedorDaoCarritos = new CartsDaoArchivos(options.fileSystem.pathCarts);
        ContenedorDaoChat = new ChatDaoArchivos(options.fileSystem.pathChat);
        break;
    case "sql":
        const {ProductosDaoSQL} = await import("./products/productsSql.js");
        const {CarritosDaoSQL} = await import("./carts/cartsSql.js");
        const {ChatDaoSQL} = await import("./chat/chatSql.js")
        ContenedorDaoProductos = new ProductosDaoSQL(options.sqliteDB, "productos");
        ContenedorDaoCarritos = new CarritosDaoSQL(options.sqliteDB,"carritos");
        ContenedorDaoChat = new ChatDaoSQL(options.sqliteDB,"chat");
        break;
    case "mongo":
        const mongoose = await import("mongoose")
        const URL ="mongodb+srv://drixar:ap548368@cluster0.zontlcc.mongodb.net/ecommerce?retryWrites=true&w=majority";
        mongoose.connect(URL,options.mongoDB, error=>{
            if(error) throw new Error(`connection failed ${error}`);
            console.log("conexion exitosa")
        })
        const {cartSchema} = await import("../models/cart.js");
        const {chatSchema} =await import("../models/chat.js");
        const {productSchema} = await import("../models/products.js");
        const {CarritosDaoMongo} = await import("./carts/cartsMongo.js");
        ContenedorDaoCarritos = new CarritosDaoMongo("cart", cartSchema);
        const {ProductosDaoMongo} =await import ("./products/productsMongo.js");
        ContenedorDaoProductos = new ProductosDaoMongo("products", productSchema);
        const {ChatDaoMongo} = await import("./chat/chatMongo.js");
        ContenedorDaoChat =new ChatDaoMongo("chat",chatSchema);
        break;
}

export {ContenedorDaoProductos,ContenedorDaoCarritos,ContenedorDaoChat}