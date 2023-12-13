// import model
const Task = require("../models/taskModel")

// create a task
const taskCreate = async(req,res) => {
    try{
        const {creatorId,creatorName,category,description} = req.body
        const task = await Task.create({creatorId,creatorName,category,description,compCount:0,completedBy:[]})
        res.status(200).json(task)
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

// get a single task
const getTask = async(req,res) => {
    try{
        const {id} = req.params
        const task = await Task.find({creatorId: id})
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
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error){
        res.status(400).json({msg : error.message})
    }
}

//Update Task
const updateTask = async(req,res) => {
    try{
        const {id} = req.params
        const {category,description} = req.body
        const task = await Task.findByIdAndUpdate(id, {category,description})
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
        await Task.findByIdAndDelete(id)
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
        const { taskId, userId, userName, link} = req.body
        const task = await Task.findByIdAndUpdate(taskId, { $push: { completedBy: { userId, userName, link } }, $inc: { compCount: 1 } }, {returnOriginal: false})
        res.status(200).json(task)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}


module.exports = {taskCreate, getTasks, getTask, deleteTask,updateTask,selectTask,completeTask}