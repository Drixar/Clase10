import { ContenedorMongo } from "../../managers/ContenedorMongo.js";

class CarritosDaoMongo extends ContenedorMongo{
    constructor(collectionName, collectionSchema){
        super(collectionName, collectionSchema)
    }
}

export {CarritosDaoMongo}