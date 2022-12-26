import EntryList from "../components/EntryList"
import EntryForm from '../components/EntryForm'
import EntryContextProvider from '../contexts/EntryContext'
import FilterBar from "../components/FilterBar"
import "../App.css"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const Home = () => {

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //   const months = monthsArray.map(month => <Route key={uuidv4()} path={month} element={<MonthlyEntries month={month} />} />)

    const { Logout } = useContext(AuthContext)
    return (
        <div className="home">
            <div className="content">
                <div className="title">
                    <div>My Journal</div>
                    <button onClick={Logout}>Logout</button>
                </div>
                < FilterBar monthsArray={monthsArray} />
                {/* <EntryContextProvider> */}
                <EntryList />
                <EntryForm />
                {/* </EntryContextProvider> */}
            </div>
        </div>);
}

export default Home;