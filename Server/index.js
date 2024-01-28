const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017/e-comm");
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model("products", productSchema);
    const data = await product.find();
    console.warn(data);
}
connectDB();


app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get('/get', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params; 
    const { task } = req.body; 
    TodoModel.findByIdAndUpdate(
        { _id: id }),
         { task: task }, 
         { new: true }}); // This option returns the modified document rather than the original  )     .then(result => res.json(result))     .catch(err => res.json(err)); });

app.listen(3001, () => {
        console.log('server is running');
    })