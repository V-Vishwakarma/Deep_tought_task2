
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express()

app.use(express.json());

app.use(cors({
    // origin:"http://localhost:5173"   // it means it will hit only but that url
    // if we didn't use origin that means any on can hit it from any where
}))

app.post("/todo", async function (req, res) {

    const createPayload = req.body   // to take data from the body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return
    }
    // it will wait until database is created due to await
    // we cam do it without await but by chance if out  database will
    // not created then also it will show msg

    // db is created
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo is created"
    })
})

app.get("/todos", async function (req, res) {
    //we have to await because it return the promise

    const todos = await todo.find({})  // this is empty because we want full data no condition
    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const uploadPayload = req.body;
    const parsedPayload = updateTodo.safeParse(uploadPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you have send wrong id"
        })
        return
    }

    await todo.update({
        _id: req.body.id  // it means what you want to update it _id which all schema has
    }, {                    // the one which have id is this mark as true
        completed: true  // what to update in db
    })
    res.json({
        msg: "todo marked as completed"
    })

})

app.listen(3000)

// install npm install cors