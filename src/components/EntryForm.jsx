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
    }
    return (
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
                <input type="text" name="details" id="details" onChange={(e) => setDetails(e.target.value)} value={details} />
            </div>
            <button type="submit">Submit Journal</button>
        </form>
    );
}

export default EntryForm;