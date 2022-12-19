import { useContext, useState } from "react";
import { EntryContext } from "../contexts/EntryContext";

const EntryForm = () => {
    const { addEntry } = useContext(EntryContext)
    const [topic, setTopic] = useState("")
    const [date, setDate] = useState("")
    const [details, setDetails] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addEntry(topic, date, details)
        setTopic("")
        setDate("")
        setDetails("")
    }
    return (
        <div className="entry-form">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="topic">Topic: </label>
                    <input type="text" name="topic" id="topic" onChange={(e) => setTopic(e.target.value)} value={topic} />
                </div>
                <div>
                    <label htmlFor="date">Date: </label>
                    <input type="text" name="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                </div>
                <div>
                    <label htmlFor="details">Details: </label>
                    <textarea maxLength={100} rows={10} name="details" id="details" onChange={(e) => setDetails(e.target.value)} value={details}> </textarea>
                </div>
                <button type="submit">Submit Journal</button>
            </form>
        </div>
    );
}

export default EntryForm;