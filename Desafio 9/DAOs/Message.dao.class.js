const mongoose = require("mongoose");
const messageModel = require("../models/messageModel");

class Message {
    constructor() {
        this.url = "mongodb+srv://Apizarro:darbeta12@cluster0.ho8uwm4.mongodb.net/?retryWrites=true&w=majority"
        //this.url = "mongodb://localhost:27017/";
        this.mongodb = mongoose.connect;
        this.mongodb(this.url);
    }

    async save(msg) {
        try {
            await this.mongodb(this.url)
            const result = await msg.save();
            return result;
        } catch (err) {
            return err;
        }
    }

    async createData(msg) {
        try {
            await this.mongodb(this.url)
            const newMessage = await this.save(
                new messageModel({
                    author: {
                        id: msg.email,
                        nombre: msg.nombre,
                        apellido: msg.apellido,
                        edad: msg.edad,
                        alias: msg.alias,
                        avatar: msg.avatar,
                    },
                    text: msg.message,
                })
            );
            return newMessage;

        }catch(err){
            return err;
        }
    }

    async getAll(){
        try{
            await this.mongodb(this.url);
            return await messageModel.find();
        }catch(err){
            return err;
        }
    }
}