import "./DisplayTask.css"
import { useState } from "react";

// import hooks
import { useTask } from "../hooks/useTask";
import { useAuthContext } from "../hooks/useAuthContext"

// import components
import DisplayComplete from "./DisplayComplete";

const DisplayPost = ({ task }) => {
    const { user } = useAuthContext()
    const { selectTask, completeTask } = useTask()
    const [link, setLink] = useState("")

    const handleSelect = async () => {
        await selectTask(task._id, user._id, user.userName)
    }

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
                <p>Completed By:</p>
                {task.completedBy && task.completedBy.map(completer => (
                    <DisplayComplete completer={ completer }/>
                ))}
            </div>

            {user.userType=="student" && <div className="react" onClick={ handleSelect }>Select</div>}
            
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