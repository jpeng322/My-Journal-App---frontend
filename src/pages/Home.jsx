import EntryList from "../components/EntryList"
import EntryForm from '../components/EntryForm'
import FilterBar from "../components/FilterBar"
import "../App.css"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { EntryContext } from "../contexts/EntryContext"

import { Button, Form, FloatingLabel, Image, Container, Col, Row } from 'react-bootstrap'
const Home = () => {

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //   const months = monthsArray.map(month => <Route key={uuidv4()} path={month} element={<MonthlyEntries month={month} />} />)

    const { Logout, accountName,user } = useContext(AuthContext)
    const { setEntries, entries } = useContext(EntryContext)

    console.log(user)

    function Reset() {
        Logout()
        setEntries(null)
        console.log(entries)
    }
    console.log(entries === null)

    return (
    <>
        <Container fluid className="home">
            <Row className="content">
                <Col className="title">
                    <div className="header-left">My Journal</div>
                    <div className="header-right">
                        {/* <button onClick={Reset}>Logout</button> */}
                        {/* <div className="username">
                            {user.data.user.username}
                        </div> */}
                        <span className="me-4">{user.data.user.username}</span><Button onClick={Reset} variant="light">Logout</Button>
                    </div>
                </Col>
            </Row >
            < FilterBar monthsArray={monthsArray} />
            {entries ? entries.length ?
                <EntryList />
                :
                <div className="empty-notice"> No journal notes for this month </div> :
                <div className="empty-notice"> No journal notes for this month </div>
            }
            <EntryForm />

        </Container >
    </>
    )
}




export default Home;