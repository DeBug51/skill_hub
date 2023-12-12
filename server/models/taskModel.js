const mongoose = require('mongoose')

const selectTaskSchema = mongoose.Schema(
    {
        userName:{
            type : String,
            required:true
        }
    },
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId, 
            required: true, 
            ref: "Users"
        }
    }
)

const completeTaskSchema = mongoose.Schema(
    {
        userName:{
            type : String,
            required:true
        }
    },
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId, 
            required: true, 
            ref: "Users"
        }
    }
)

const taskSchema = mongoose.Schema(
    {
        cetagory:{
            type: String,
            required:true
        },
        description:{
            type : String,
            required : true
        },
        completed:{
            type: Boolean,
            required: true,
            default: false
        },
        selector:[selectTaskSchema],
        completed:[completeTaskSchema]
    },
    {
        timestamps : true
    }
)


const Task = mongoose.model("Task", taskSchema)

module.exports = Task;