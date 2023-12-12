// import model
const Task = require("../models/taskModel")

// create a task
const taskCreate = async(req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

// get a single task
const getTask = async(req,res) => {
    try{
        const {id} = req.params
        const task = await Task.findById(id)
        if (!id) {
            throw Error("Task can not find!!")}
        res.status(200).json(task)
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

// get all task
const getTasks = async(req,res) => {
    try{
        const tasks = await Task.find(req.body)
        res.status(200).json(tasks)
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

//Update Task
const updateTask = async(req,res) => {
    try{
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body,{new: true}
            )
        if (!id) {
            throw Error("Task can not find!!")}
        res.status(200).json(task)
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

// delete task
const deleteTask = async(req,res) => {
    try{
        const {id} = req.params
        const task = Task.findByIdAndDelete(id)
        if (!id) {
            throw Error("Task can not find!!")}
        res.status(200).send('Task deleted')
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

// select task
const selectTask = async(req,res) => {
    try{
        const { taskId, userId, userName} = req.body
        const task = await Task.findByIdAndUpdate(taskId, { $push: { selector: { userId, userName } } }, {returnOriginal: false})
        res.status(200).json(task)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}
// complete task
const completeTask = async(req,res) => {
    try{
        const { taskId, userId, userName} = req.body
        const task = await Task.findByIdAndUpdate(taskId, { $push: { completed: { userId, userName } } }, {returnOriginal: false})
        res.status(200).json(task)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}


module.exports = {taskCreate, getTasks, getTask, deleteTask,updateTask,selectTask,completeTask}