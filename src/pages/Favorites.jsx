import { useContext } from "react";
// import {EntryContext} from "../contexts/EntryContext"
import { EntryContext } from "../contexts/EntryContext";
import EntryDetails from "../components/EntryDetails";
import EditForm from "../components/EditForm";
import "../cssPages/EditForm.css";
import FilterBar from "../components/FilterBar";
import { AuthContext } from "../contexts/AuthContext";
import EntryForm from "../components/EntryForm";

import {
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";

const Favorites = () => {
  const { changeId, toggleEdit, entries, setEntries } =
    useContext(EntryContext);
  const { Logout,user } = useContext(AuthContext);

  const favoritedEntries = entries
    ? entries.filter((entry) => entry.favorite)
    : null;

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function Reset() {
    Logout();
    setEntries(null);
  }
  return (


    <Container fluid className="home">
      <Row className="content">
        <Col className="title">
          <div className="header-left">My Journal</div>
          <div className="header-right">
            <span className="me-4">{user.data.user.username}</span>
            <Button onClick={Reset} variant="light">
              Logout
            </Button>
          </div>
        </Col>
      </Row>
      <FilterBar monthsArray={monthsArray} />

      {favoritedEntries.length > 0 ? (
        <Row className="entry-list mt-4">
          {favoritedEntries.map((entry) => {
            return entry.id === changeId ? (
              <EditForm entry={entry} />
            ) : (
              <EntryDetails
                key={entry.id}
                entry={entry}
                toggleEdit={toggleEdit}
              />
            );
          })}
        </Row>
      ) : (
        <div className="empty-notice"> No journal notes for this month </div>
      )}
      <EntryForm />
    </Container>
  );
};

export default Favorites;
