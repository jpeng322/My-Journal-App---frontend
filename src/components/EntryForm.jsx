import { useContext, useState } from "react";
import { EntryContext } from "../contexts/EntryContext";

const EntryForm = () => {
    const { addEntry, active } = useContext(EntryContext)
    const [topic, setTopic] = useState("")
    const [details, setDetails] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addEntry(topic, details)
        setTopic("")
        setDetails("")
    }
  
    return (
        <div className= {active ? "entry-form" : "entry-form hidden"}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="topic">Topic: </label>
                    <input type="text" name="topic" id="topic" onChange={(e) => setTopic(e.target.value)} value={topic} />
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