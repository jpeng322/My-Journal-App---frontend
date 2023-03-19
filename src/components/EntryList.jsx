import { useContext, useState } from "react"
import { EntryContext } from "../contexts/EntryContext"
import EntryDetails from "./EntryDetails"
import { v4 as uuidv4 } from "uuid"
import EditForm from "./EditForm"
import "../cssPages/EntryList.css"

import { Col,Row } from "react-bootstrap"

const EntryList = () => {
    const { changeId, toggleEdit, entries } = useContext(EntryContext)

    return (
        <Row className="entry-list p-3" >

            {entries ? entries.map(entry => {
                return entry.id === changeId ? <EditForm entry={entry} /> : <EntryDetails key={uuidv4()} entry={entry} toggleEdit={toggleEdit} />
            }) : "No notes"}
            {/* {entries.map(entry => <EditForm entry={entry} />)} */}
        </Row>
    )
}

export default EntryList

