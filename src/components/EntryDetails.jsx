import { useContext } from "react";
import { EntryContext } from "../contexts/EntryContext";
import date from "date-and-time"

const EntryDetails = (props) => {
    const format = date.compile('ddd, MMM DD YYYY')
    const currentDate = date.format(new Date(), format)
    const { deleteEntry } = useContext(EntryContext)
    return (
        <div className="entry">
            <h1>Topic: {props.entry.topic}</h1>
            <h3>Date: {currentDate}</h3>
            <div className="details">
                <p>Details: {props.entry.details}</p>
            </div>
            <button onClick={() => deleteEntry(props.entry.id)}>Delete</button>
        </div>
    );
}

export default EntryDetails;

