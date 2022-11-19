import { ContenedorMysql } from "../../managers/ContenedorMysql.js";

class ChatDaoSQL extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName)
    }
}

export {ChatDaoSQL}