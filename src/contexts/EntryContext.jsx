import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EntryContext = createContext()

const EntryContextProvider = (props) => {
    const localData = JSON.parse(localStorage.getItem("entries"))

    const [entries, setEntries] = useState(localData)

    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries), [entries])
    })

    const addEntry = (topic, date, details) => {
        setEntries([{ topic, date, details, id: uuidv4() }, ...entries])
    }

    const deleteEntry = (id) => {
        console.log("deleted!")
        setEntries(entries.filter(entry => entry.id !== id))
    }
    console.log(entries)

    return (
        <EntryContext.Provider value={{ entries, addEntry, deleteEntry }}>
            {props.children}
        </EntryContext.Provider>
    )
}

export default EntryContextProvider

