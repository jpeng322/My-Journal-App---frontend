import { useContext } from "react";
import { EntryContext } from "../contexts/EntryContext";
import date from "date-and-time"

const EntryDetails = (props) => {
    // const format = date.compile('MMMM DD, YYYY')
    // const currentDate = date.format(new Date(), format)
    const { deleteEntry } = useContext(EntryContext)
    // console.log(props)
    // console.log(currentDate.split(" "))
    // console.log(entries)
    return (
        <div className="entry">
            <div className="entry-header">
                <h1>Topic: {props.entry.topic}</h1>
                <button className="del-btn" onClick={() => deleteEntry(props.entry.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg></button>
            </div>
            <h3>{props.entry.date}</h3>
            <div className="details">
                <p>Details: {props.entry.details}</p>
            </div>
        </div>
    );
}

export default EntryDetails;

