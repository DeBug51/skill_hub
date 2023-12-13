import "./CreateTask.css"
import { useState } from "react";

// import hooks
import { useTask } from "../hooks/useTask";
import { useAuthContext } from "../hooks/useAuthContext"

const CreatePost = () => {
    const { user } = useAuthContext()
    const { createTasks } = useTask()
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createTasks(user._id, user.userName, category, description)
        setCategory("")
        setDescription("")
    }

    return (
        <div className="createtask">
            <p className="name">{ user.userName }</p>
            <form className="taskform" onSubmit={ handleSubmit }>
                <label>Category:</label>
                <input className="box"
                    type = "text"
                    onChange = {(e) => setCategory(e.target.value)}
                    value = { category }
                />
                <label>Description:</label>
                <input className="box"
                    type = "text"
                    onChange = {(e) => setDescription(e.target.value)}
                    value = { description }
                />
                <input className="button"
                    type = "submit"
                    value = { "Post" }
                />
            </form>
        </div>
    );
}
 
export default CreatePost;