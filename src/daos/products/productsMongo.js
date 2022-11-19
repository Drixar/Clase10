import { ContenedorMongo } from "../../managers/ContenedorMongo.js";

class ProductosDaoMongo extends ContenedorMongo{
    constructor(collectionName, collectionSchema){
        super(collectionName, collectionSchema)
    }
}

export {ProductosDaoMongo}