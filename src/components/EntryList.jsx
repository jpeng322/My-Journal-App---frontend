import { useContext } from "react"
import { EntryContext } from "../contexts/EntryContext"
import EntryDetails from "./EntryDetails"
import {v4 as uuidv4} from "uuid"

const EntryList = () => {
    const { entries } = useContext(EntryContext)
    return (
        <div className="entry-list">
            {entries.map(entry => <EntryDetails key={uuidv4()} entry={entry} />)}
        </div>
    )
}

export default EntryList

