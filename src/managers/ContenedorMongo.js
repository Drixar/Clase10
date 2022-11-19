import mongoose from "mongoose"

class ContenedorMongo{
    constructor(collectionName, collectionSchema){
        this.model = mongoose.model(collectionName, collectionSchema)
    }

    async getAll() {
        try {
            const result = await this.model.find();
            return result;
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id) {
        try {
            const result = await this.model.find({_id: id})
            return result;
        } catch (error) {
            console.log(error)
        }
    }

    async save(newData){
        try {
            const result = await this.model.create(newData);
            return result._id; //`new element saved with id: ${id}`;
        } catch (error) {
            console.log(error)
        }
    }

    async updateById(id, newData){
        try {
            const data = await this.model.updateOne({_id:id}, {$set: newData});
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id){
        try {
            const data = await this.model.deleteOne({_id: id});
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(){
        try {
            const data = await this.model.deleteMany({});
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}

export {ContenedorMongo};