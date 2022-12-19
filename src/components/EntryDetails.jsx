import { useContext } from "react";
import { EntryContext } from "../contexts/EntryContext";


const EntryDetails = (props) => {
    const { deleteEntry } = useContext(EntryContext)
    return (
        <>
            <h1>Topic: {props.entry.topic}</h1>
            <h3>Date: {props.entry.date}</h3>
            <p>Details: {props.entry.details}</p>
            <button onClick={() => deleteEntry(props.entry.id)}>Delete</button>
        </>
    );
}

export default EntryDetails;

