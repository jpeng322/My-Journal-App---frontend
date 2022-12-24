import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";

const Favorites = () => {
    const { entries } = useContext(EntryContext)
    // console.log(favorites, "favorites")
    console.log(entries)
 const favoritedEntries = entries.filter(entry => entry.favorite)
 console.log(entries.filter(entry => entry.favorite))
    return (
        <div className="entry-list">
            {console.log(entries)}
        {favoritedEntries.length > 0 ? 
        favoritedEntries.map(entry => <EntryDetails key={entry.id} entry={entry} />) : 
        "No journal notes for this month"}
    </div>
        // <div>
        //     {favoritedEntries.length > 0 ? favoritedEntries.map(entry => <EntryDetails key={entry.id} entry={entry} />) : "No journal notes for this month"}
        // </div>
    );
}

export default Favorites;