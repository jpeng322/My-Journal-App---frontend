import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";
import EditForm from "../components/EditForm";
import "../cssPages/EditForm.css"
import FilterBar from "../components/FilterBar"
import { AuthContext } from "../contexts/AuthContext"

const Favorites = () => {
    const { changeId, toggleEdit, entries } = useContext(EntryContext)
    const { Logout } = useContext(AuthContext)

    const favoritedEntries = entries.filter(entry => entry.favorite)

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className="content">
            <div className="title">
                <div>My Journal</div>
                <button onClick={Logout}>Logout</button>
            </div>
            < FilterBar monthsArray={monthsArray} />
            <div className="entry-list">
                {favoritedEntries.length > 0 ?
                    favoritedEntries.map(entry => {
                        return entry.id === changeId ? <EditForm entry={entry} /> :
                            <EntryDetails key={entry.id} entry={entry} toggleEdit={toggleEdit} />
                    }) :
                    "No journal notes for this month"}
            </div>
        </div>
    );
}

export default Favorites;