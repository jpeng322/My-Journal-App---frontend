import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";
import EditForm from "../components/EditForm";
import "../cssPages/EditForm.css"
import FilterBar from "../components/FilterBar"
import { AuthContext } from "../contexts/AuthContext"
import EntryForm from "../components/EntryForm";

import { Button, Form, FloatingLabel, Image, Container, Col, Row } from 'react-bootstrap'

const Favorites = () => {
    const { changeId, toggleEdit, entries, setEntries } = useContext(EntryContext)
    const { Logout, accountName, user} = useContext(AuthContext)

    const favoritedEntries = entries ? entries.filter(entry => entry.favorite) : null
    console.log(favoritedEntries)

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    function Reset() {
        Logout()
        setEntries(null)
        console.log(entries)
    }
    return (
    //     <Container fluid className="home">
    //  <Row className="content"
    //         <div className="title">
    //             <div className="header-left">My Journal</div>
    //             <div className="header-right">
    //                 <div>
    //                     {accountName}
    //                 </div>
    //                 <span className="me-4">{user.data.user.username}</span><Button onClick={Reset} variant="light">Logout</Button>
    //             </div>
    //         </div>
    //         < FilterBar monthsArray={monthsArray} />
    //         {favoritedEntries.length > 0 ?
    //             <div className="entry-list"> 
    //             {favoritedEntries.map(entry => {
    //                 return entry.id === changeId ? <EditForm entry={entry} /> :
    //                     <EntryDetails key={entry.id} entry={entry} toggleEdit={toggleEdit} />
    //             })}
    //             </div>
    //             :
    //             <div className="empty-notice"> No journal notes for this month </div>}
    // <EntryForm />
    //     </div >
    //     <Container/>



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

        {favoritedEntries.length > 0 ?
            <Row className="entry-list mt-4"> 
             {favoritedEntries.map(entry => {
                    return entry.id === changeId ? <EditForm entry={entry} /> :
                        <EntryDetails key={entry.id} entry={entry} toggleEdit={toggleEdit} />
                })}
            </Row>
            :
            <div className="empty-notice"> No journal notes for this month </div>}
        <EntryForm />

    </Container >
    );
}

export default Favorites;