import { ContenedorMongo } from "../../managers/ContenedorMongo.js";

class ChatDaoMongo extends ContenedorMongo{
    constructor(collectionName, collectionSchema){
        super(collectionName, collectionSchema)
    }
}

export {ChatDaoMongo}