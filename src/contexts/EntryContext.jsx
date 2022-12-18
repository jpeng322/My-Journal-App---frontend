import { useState, createContext } from "react";

export const EntryContext = createContext()

const EntryContextProvider = (props) => {
    const [entries, setEntries] = useState([
        {
            topic: "BLAHABAH",
            date: "today",
            details: "today was a bad day"
        },
        {
            topic: "asdASDASD",
            date: "tMR",
            details: "the best day ever day"
        }
    ])

    return (
        <EntryContext.Provider value={{ entries }}>
            {props.children}
        </EntryContext.Provider>
    )
}

export default EntryContextProvider

