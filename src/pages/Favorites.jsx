import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";
import EditForm from "../components/EditForm";
import "../cssPages/EditForm.css"
import FilterBar from "../components/FilterBar"
import { AuthContext } from "../contexts/AuthContext"
import Button from "react-bootstrap/Button"
import EntryForm from "../components/EntryForm";

const Favorites = () => {
    const { changeId, toggleEdit, entries, setEntries } = useContext(EntryContext)
    const { Logout, accountName } = useContext(AuthContext)

    const favoritedEntries = entries ? entries.filter(entry => entry.favorite) : null
    console.log(favoritedEntries)

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    function Reset() {
        Logout()
        setEntries(null)
        console.log(entries)
    }
    return (
        <div className="content">
            <div className="title">
                <div className="header-left">My Journal</div>
                <div className="header-right">
                    <div>
                        {accountName}
                    </div>
                    <Button onClick={Reset} variant="light">Logout</Button>
                </div>
            </div>
            < FilterBar monthsArray={monthsArray} />
            {favoritedEntries.length > 0 ?
                <div className="entry-list"> 
                {favoritedEntries.map(entry => {
                    return entry.id === changeId ? <EditForm entry={entry} /> :
                        <EntryDetails key={entry.id} entry={entry} toggleEdit={toggleEdit} />
                })}
                </div>
                :
                <div className="empty-notice"> No journal notes for this month </div>}
    <EntryForm />
        </div >
    );
}

export default Favorites;