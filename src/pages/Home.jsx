import EntryList from "../components/EntryList"
import EntryForm from '../components/EntryForm'
import EntryContextProvider from '../contexts/EntryContext'
import FilterBar from "../components/FilterBar"
import "../App.css"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Login from "./Login"

const Home = () => {

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //   const months = monthsArray.map(month => <Route key={uuidv4()} path={month} element={<MonthlyEntries month={month} />} />)

    const { Logout, user } = useContext(AuthContext)
    console.log( user , "LOGIN HAS USER OR NAH")
    return (<>
        {!user ? <Login /> : <div className="home">
            < div className="content" >
                <div className="title">
                    <div>My Journal</div>

                    <button onClick={Logout}>Logout</button>
                </div>
                < FilterBar monthsArray={monthsArray} />
                <EntryList />
                <EntryForm />
            </div >
        </div >}
        {/* {hasUser ? <div>hi</div> : <div>not logged in</div>}
        <div className="home">
            < div className="content" >
                <div className="title">
                    <div>My Journal</div>

                    <button onClick={Logout}>Logout</button>
                </div>
                < FilterBar monthsArray={monthsArray} />
                <EntryList />
                <EntryForm />
            </div >
        </div > */}
    </>);

}

export default Home;