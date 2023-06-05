import { useContext } from "react";
import { EntryContext } from "../contexts/EntryContext";
import { AuthContext } from "../contexts/AuthContext";
import EntryDetails from "../components/EntryDetails";
import EditForm from "../components/EditForm";
import FilterBar from "../components/FilterBar";
import EntryForm from "../components/EntryForm";

import {
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
const MonthlyEntries = (props) => {
  const { changeId, toggleEdit, entries, setEntries } =
    useContext(EntryContext);
  const { Logout, user } = useContext(AuthContext);

  const monthlyEntries = entries
    ? entries.filter((entry) => entry.date.split(" ")[0] === `${props.month}`)
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
    <>
      <Container fluid className="monthly-container">
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
        {monthlyEntries.length > 0 ? (
          <Row className="entry-list entry-list mt-4">
            {monthlyEntries.map((entry) => {
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
    </>
  );
};

export default MonthlyEntries;
