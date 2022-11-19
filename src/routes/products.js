
import express from 'express';
import {ContenedorDaoProductos} from "../daos/index.js";

const router = express.Router();


// MYSQL -MariaDB
//  const productsService = new ContenedorSql(options.mariaDB, "products"); 

// Mongo db 
const productsService = ContenedorDaoProductos;


router.get('/',async(req,res)=>{
    const productos = await productsService.getAll();
    res.send(productos);
})

router.get('/:id',async(req,res)=>{
    const productId = req.params.id;
    const product = await productsService.getById(parseInt(productId));
    if(product){
        return res.send(product)
    } else{
        return res.send({error : 'producto no encontrado'})
    }
})

router.post('/',async(req,res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    const result = await productsService.save(newProduct);
    res.send(result);
})

router.put('/:id',async(req,res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    const productId = req.params.id;
    const result = await productsService.updateById(parseInt(productId),newProduct);
    res.send(result);
})

router.delete('/:id',async(req,res)=>{
    const productId = req.params.id;
    await productsService.deleteById(parseInt(productId));
    res.send("OK");
})

export const productsRouter = router;
