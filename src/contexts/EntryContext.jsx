import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import date from "date-and-time"
import axios from "axios";

export const EntryContext = createContext()

const EntryContextProvider = (props) => {
    // const localData = JSON.parse(localStorage.getItem("entries"))

    // const [entries, setEntries] = useState(localData)
    const [entries, setEntries] = useState([])
    // const [entries, setEntries] = useState([{
    //     topic: "asdsadasd",
    //     date: "January 12, 2012",
    //     details: "asdsadasd",
    //     id: 1
    // },
    // {
    //     date: "February",
    //     topic: "It is feb",
    //     details: "asdasdd",
    //     id: 3
    // }])


    useEffect(() => {

        axios.get("http://localhost:3001/entries").then(response => {
            setEntries(response.data)
        })
    }, [])
    console.log(entries)

    // useEffect(() => {
    //     localStorage.setItem("entries", JSON.stringify(entries), [entries])
    // })


    const format = date.compile('MMMM DD, YYYY')
    const currentDate = date.format(new Date(), format)
    // console.log(currentDate)
    const addEntry = (topic, details, id) => {
        // setEntries([{ topic, date: currentDate, details, id: uuidv4() }, ...entries])
        axios.post("http://localhost:3001/entries", { topic, date: currentDate, details })
            .then(response => setEntries([response.data, ...entries]))
    }

    const deleteEntry = (id) => {
        console.log(id)
        // setEntries(entries.filter(entry => entry.id !== id))
        axios.delete(`http://localhost:3001/entries/${id}`)
            .then(setEntries(entries.filter(entry => entry.id !== id)))
    }

    const editEntry = (id) => {
        // const editThing = entries.find(entry => entry.id === id)
        // console.log("pressed")
        // console.log(id)
        axios.put(`http://localhost:3001/entries/${id}`, {
            date: "February",
            topic: "It is feb",
            details: "asdasdd",
            id: id
        }).then(response => setEntries([response.data, ...entries.filter(entry => entry.id !== id)]))
    }



    const [active, setActive] = useState(false)

    const toggleForm = () => {
        setActive(!active)
        // console.log(active)
    }

    const closeForm = () => {
        setActive(false)
    }


    return (
        <EntryContext.Provider value={{
            entries, addEntry, deleteEntry,
            editEntry,
            active, currentDate, toggleForm, closeForm
        }}>
            {props.children}
        </EntryContext.Provider>
    )
}

export default EntryContextProvider

