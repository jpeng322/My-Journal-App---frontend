import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";


const Favorites = () => {
    const { favorites } = useContext(EntryContext)
    console.log(favorites)

    return (
        <div>
            {favorites.length > 0 ? favorites.map(entry => <EntryDetails key={entry.id} entry={entry} />) : "No journal notes for this month"}
        </div>
    );
}

export default Favorites;