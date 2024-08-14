
// mongo db
// install mongoose
// make schema(structure)
// todo{
//     title:string,
//     description:string,
//     completed:boolean
// }

const mongoose = require("mongoose")
const { string } = require("zod")
// mongodb connection url
// in real life we will connect in .env file

mongoose.connect("mongodb+srv://admin:Vishwajeet@cluster0.rfip4f2.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

    // we can also do this
    // completed:{
    //     type:Boolean,
    //     default:false
    // }
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo: todo
}

