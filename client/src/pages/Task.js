import "./Task.css"
import { useEffect } from "react"

// import components
import CreateTask from "../components/CreateTask"
import DisplayTask from "../components/DisplayTask"

// import hooks
import { useTask } from "../hooks/useTask"

const Task = () => {
    const { getTasks, tasks } = useTask()
    
    useEffect(() => {
        const getAllTasks = async () => {
            await getTasks()
        }
        getAllTasks()
    }, [])
    return (
        <div className="taskpage">
            <CreateTask />
            {tasks && tasks.map(task => (
                <DisplayTask task = { task }/>
            ))}
        </div>
    );
}
 
export default Task;