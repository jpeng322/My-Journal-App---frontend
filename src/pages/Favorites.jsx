import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";
import EditForm from "../components/EditForm";
import "../cssPages/EditForm.css"

const Favorites = () => {
    const {  changeId, toggleEdit, entries } = useContext(EntryContext)
    // console.log(favorites, "favorites")
    console.log(entries)
 const favoritedEntries = entries.filter(entry => entry.favorite)
 console.log(entries.filter(entry => entry.favorite))
 {console.log(changeId)}
    return (
        
        <div className="entry-list">
        {favoritedEntries.length > 0 ? 
        favoritedEntries.map(entry => {
           return entry.id === changeId ? <EditForm entry={entry} /> :
         <EntryDetails key={entry.id} entry={entry} toggleEdit={toggleEdit} />}) : 
        "No journal notes for this month"}
    // </div>
        // <div className="entry-list">
        //     {favoritedEntries.length > 0 ? favoritedEntries.map(entry => <EntryDetails key={entry.id} entry={entry} />) : "No journal notes for this month"}
        // </div>
        //    <div className="entry-list">
        //    {favoritedEntries.length > 0 ? favoritedEntries.map(entry => <EditForm entry={entry} />) : "No journal notes for this month"}
        // </div>
    );
}

export default Favorites;