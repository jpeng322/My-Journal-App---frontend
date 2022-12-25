import { useContext, useState } from "react";
import { EntryContext } from "../contexts/EntryContext";
import "../cssPages/EditForm.css"

const EditForm = (props) => {
    // console.log(props)
    const { editEntry, setChangeId, cancelEdit } = useContext(EntryContext)
    const [topic, setTopic] = useState(props.entry.topic)
    const [details, setDetails] = useState(props.entry.details)
    const initialDate = props.entry.date


    const handleEdit = (e) => {
        e.preventDefault()
        editEntry(props.entry.id, topic, initialDate, details, props.entry.favorite)
        setTopic("")
        setDetails("")
        setChangeId("")
        console.log(topic, details)
    }

    // console.log(currentDate, "currentdate")
    return (
        <div className="edit-entry">
            <form action="" onSubmit={handleEdit}>
                <div className="edit-header">
                    <h2>{initialDate}</h2>
                </div>
                <div className="edit-content">
                    <div>
                        <label htmlFor="topic"> <h3>Title:</h3> </label>
                        <input type="text" name="topic" id="topic" onChange={(e) => setTopic(e.target.value)} value={topic} />
                    </div>
                    <div>
                        <label htmlFor="details"><h4>Details:</h4> </label>
                        <textarea maxLength={130} rows={5} columns={5} name="details" id="details" onChange={(e) => setDetails(e.target.value)} value={details}> </textarea>
                    </div>
                </div>
                <div className="edit-buttons">
                    <button type="submit">Update</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditForm