import { useState } from "react"; 

const useTask = () => {
    const [tasks, setTasks] = useState(null)

    const getTasks = async () => {
        const res = await fetch('/api/task/get',{
            method: 'GET'
        })
        const json = await res.json()
        if (res.ok){
            setTasks(json)
        }
    }

    const createTasks = async (creatorId,creatorName,category,description) => {
        await fetch('/api/task/create',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ creatorId,creatorName,category,description})
        })
    }

    const deleteTasks = async (id) => {
        const res = await fetch('/api/task/delete/'+id,{
            method: 'DELETE'
        })
    }

    const updateTask = async (category,description) => {
        await fetch("/api/task/update/"+id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ category,description })
        })
    }

    const selectTask = async (taskId, userId, userName) => {
        await fetch("/api/task/select", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ taskId, userId, userName })
        })
    }

    const completeTask = async (taskId, userId, userName) => {
        await fetch("/api/task/complete", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ taskId, userId, userName })
        })
    }


    
    return {getTasks,createTasks,deleteTasks,updateTask,selectTask,completeTask,tasks};
}
 
export {useTask};

