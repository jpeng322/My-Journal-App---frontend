import EntryList from "../components/EntryList"
import EntryForm from '../components/EntryForm'
import FilterBar from "../components/FilterBar"
import "../App.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { EntryContext } from "../contexts/EntryContext"

const Home = () => {

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //   const months = monthsArray.map(month => <Route key={uuidv4()} path={month} element={<MonthlyEntries month={month} />} />)

    const { Logout} = useContext(AuthContext)
    const {setEntries, entries} = useContext(EntryContext)

    function Reset() {
        Logout()
        setEntries(null)
        console.log(entries)
    }

    return (<>
        {<div className="home">
            < div className="content" >
                <div className="title">
                    <div>My Journal</div>

                    <button onClick={Reset}>Logout</button>
                </div>
                < FilterBar monthsArray={monthsArray} />
                <EntryList />
                <EntryForm />
            </div >
        </div >}
    </>)
}




export default Home;