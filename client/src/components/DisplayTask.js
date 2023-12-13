import "./DisplayTask.css"
import { useState } from "react";

// import hooks
import { useTask } from "../hooks/useTask";
import { useAuthContext } from "../hooks/useAuthContext"

// import components
import DisplayComplete from "./DisplayComplete";

const DisplayPost = ({ task }) => {
    const { user } = useAuthContext()
    const { completeTask } = useTask()
    const [link, setLink] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await completeTask(task._id, user._id, user.userName, link)
        setLink("")
    }

    return (
        <div className="task">
            <div className="container">
                <p className="name">{ task.creatorName }</p>
                <p className="content">Category: { task.category }</p>
                <p className="content">Description: { task.description }</p>
                <div className="stat">
                    <p>{ task.compCount } completers</p>
                </div>
            </div>
            {task.completedBy && task.completedBy.map(completer => (
                <DisplayComplete completer={ completer }/>
            ))}

            {user.userType=="student" && <form className="submitform" onSubmit={ handleSubmit }>
                <input className="box"
                    type = "text"
                    onChange = {(e) => setLink(e.target.value)}
                    value = { link }
                />
                <input className="button"
                    type = "submit"
                    value = { "Submit" }
                />
            </form>}
        </div>
    );
}
 
export default DisplayPost;