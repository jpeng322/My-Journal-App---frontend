import EntryList from "../components/EntryList"
import EntryForm from '../components/EntryForm'
import FilterBar from "../components/FilterBar"
import "../App.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { EntryContext } from "../contexts/EntryContext"
import Button from "react-bootstrap/Button"
const Home = () => {

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //   const months = monthsArray.map(month => <Route key={uuidv4()} path={month} element={<MonthlyEntries month={month} />} />)

    const { Logout, accountName } = useContext(AuthContext)
    const { setEntries, entries } = useContext(EntryContext)

    function Reset() {
        Logout()
        setEntries(null)
        console.log(entries)
    }
    console.log(entries)

    return (<>
        {<div className="home">
            < div className="content" >
                <div className="title">
                    <div className="header-left">My Journal</div>
                    <div className="header-right">
                        {/* <button onClick={Reset}>Logout</button> */}
                        <div>
                           {accountName}
                        </div>
                        <Button onClick={Reset} variant="light">Logout</Button>
                    </div>
                </div>
                < FilterBar monthsArray={monthsArray} />
                {/* <EntryList /> */}
                {entries.length > 0 ?
                <EntryList />
                :
                <div className="empty-notice"> No journal notes for this month </div>}
                <EntryForm />
            </div >
        </div >}
    </>)
}




export default Home;