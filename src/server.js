import express from "express";
import { Server } from "socket.io";
import { productsRouter } from "./routes/products.js";
import { cartRouter } from "./routes/cart.js";
import {ContenedorDaoProductos, ContenedorDaoCarritos, ContenedorDaoChat} from "./daos/index.js";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const productsService = ContenedorDaoProductos;
const chatService = ContenedorDaoChat;
const cartService = ContenedorDaoCarritos;

const app = express();

//api routes
app.use('/api/products',productsRouter);  cartRouter
app.use('/api/cart',cartRouter); 

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));
const io = new Server(server);

//trabajar con archivos estaticos de la carpeta public
app.use(express.static(__dirname+"/public"));

const historicoMensajes = [];


//websocket
io.on("connection",async(socket)=>{
    console.log("nuevo usuario conectado", socket.id);

    //enviar todos los productos al usuario cuando se conecte.
    socket.emit("products", await productsService.getAll())

    //recibimos el nuevo producto del cliente y lo guardamos
    socket.on("newProduct",async(data)=>{
        await productsService.save(data);
        //enviamos la lista de productos actualizada a todos los sockets conectados
        io.sockets.emit("products", await productsService.getAll());
    })

    //enviar a todos menos al socket conectado
    socket.broadcast.emit("newUser");

 
    socket.emit("historico",await chatService.getAll());


    socket.on("message",async data=>{
        console.log(await data);
        await chatService.save(data)
        io.sockets.emit("historico",await chatService.getAll());
    });
})