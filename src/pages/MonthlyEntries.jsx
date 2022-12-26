import { useContext } from "react"
import { EntryContext } from "../contexts/EntryContext"
import EntryDetails from "../components/EntryDetails"
import EditForm from "../components/EditForm"
import FilterBar from "../components/FilterBar"
import { AuthContext } from "../contexts/AuthContext"

const MonthlyEntries = (props) => {
    const { changeId, toggleEdit, entries } = useContext(EntryContext)
    const monthlyEntries = entries.filter(entry => entry.date.split(" ")[0] === `${props.month}`)

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    const { Logout } = useContext(AuthContext)

    return (
        <div className="content">
            <div className="title">
                <div>My Journal</div>
                <button onClick={Logout}>Logout</button>
            </div>
            < FilterBar monthsArray={monthsArray} />
            <div className="entry-list">
                {monthlyEntries.length > 0 ? monthlyEntries.map(entry => {
                    return entry.id === changeId ? <EditForm entry={entry} /> :
                        <EntryDetails key={entry.id} entry={entry} toggleEdit={toggleEdit} />
                }) :
                    <div> No journal notes for this month </div>}
                {/* {entries.map(entry => <EntryDetails key={entry.id} entry={entry} />)} */}
            </div>
        </div>
    )
}


export default MonthlyEntries;