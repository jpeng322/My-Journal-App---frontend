import { useContext } from "react";

const EntryDetails = (props) => {
    console.log(props)
    return (
        <>
            <h1>Subject: {props.entry.topic}</h1>
            <h3>Date: {props.entry.date}</h3>
            <p>Details: {props.entry.details}</p>
        </>
    );
}

export default EntryDetails;

