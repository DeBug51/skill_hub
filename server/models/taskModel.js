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
        creatorId:{
            type: mongoose.Schema.Types.ObjectId, 
            required: true, 
            ref: "Users"
        },
        creatorName:{
            type: String,
            required:true
        },
        category:{
            type: String,
            required:true
        },
        description:{
            type : String,
            required : true
        },
        selector:[selectTaskSchema],
        completedBy:[completeTaskSchema]
        
    },
    {
        timestamps : true
    }
)


const Task = mongoose.model("Task", taskSchema)

module.exports = Task;