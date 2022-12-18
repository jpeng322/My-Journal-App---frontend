import { useContext } from "react"
import { EntryContext } from "../contexts/EntryContext"
import EntryDetails from "./EntryDetails"

const EntryList = () => {
    const {entries} = useContext(EntryContext)
    return (
       <>
       {entries.map(entry => <EntryDetails entry={entry} /> )}
       </>
    )
}

export default EntryList

