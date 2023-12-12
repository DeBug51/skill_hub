const router = require("express").Router()

// import controller
const {taskCreate, getTasks, getTask, deleteTask,updateTask,selectTask,completeTask} = require("../controllers/taskControl")

// define routes
router.post("/create", taskCreate)
router.get ("/get", getTasks)
router.get("/get/:id",getTask)
router.delete("/delete/:id",deleteTask)
router.patch("/update/:id",updateTask)
router.patch("/select",selectTask)
router.patch("/complete",completeTask)

module.exports = router