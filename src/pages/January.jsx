import { useContext } from "react"
import { EntryContext } from "../contexts/EntryContext"
import EntryDetails from "../components/EntryDetails"

const January = () => {
    const { entries } = useContext(EntryContext)
    // const januaryEntries = entries.filter(entry => entry.date)
    const monthlyEntries = entries.filter(entry => entry.date.split(" ")[0] === "January")
    // console.log(entries[0].date.split(" ")[0])
    return (
        <div className="entry-list">
            {monthlyEntries.length > 0 ? monthlyEntries.map(entry => <EntryDetails key={entry.id} entry={entry} />) : "No journal notes for this month"}
            {/* {entries.map(entry => <EntryDetails key={entry.id} entry={entry} />)} */}
        </div>
    )
}


export default January;