import { useContext, useState } from "react";
import { EntryContext } from "../contexts/EntryContext";
import "../cssPages/EditForm.css"

const EditForm = (props) => {
    // console.log(props)
    const { addEntry, editEntry, currentDate, closeForm, setChangeId, cancelEdit } = useContext(EntryContext)
    const [topic, setTopic] = useState(props.entry.topic)
    const [details, setDetails] = useState(props.entry.details)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(topic, details)
    //     editEntry(topic, details)
    //     setTopic("")
    //     setDetails("")
    //     console.log("submitted")
    // }

    const handleEdit = (e) => {
        e.preventDefault()
        editEntry(props.entry.id, topic, details)
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
                    {/* <h3>Note</h3> */}
                    <h2>{currentDate}</h2>
                    {/* <button type="button" onClick={closeForm()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button> */}
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