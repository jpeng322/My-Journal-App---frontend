import { useState, createContext } from "react";

export const EntryContext = createContext()

const EntryContextProvider = (props) => {
    const [entries, setEntries] = useState([
        {
            topic: "BLAHABAH",
            date: "today",
            details: "today was a bad day",
            id: 1
        },
        {
            topic: "asdASDASD",
            date: "tMR",
            details: "the best day ever day",
            id: 2
        }
    ])

    const addEntry = (topic, date, details) => {
        setEntries([...entries, { topic, date, details }])
        console.log(entries)
    }

    const deleteEntry = () => {
        console.log("deleted!")
    }

    return (
        <EntryContext.Provider value={{ entries, addEntry }}>
            {props.children}
        </EntryContext.Provider>
    )
}

export default EntryContextProvider

