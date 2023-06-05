import EntryList from "../components/EntryList";
import EntryForm from "../components/EntryForm";
import FilterBar from "../components/FilterBar";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { EntryContext } from "../contexts/EntryContext";

import { Button, Container, Col, Row } from "react-bootstrap";
const Home = () => {
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


  const { Logout, user } = useContext(AuthContext);
  const { setEntries, entries } = useContext(EntryContext);

  function Reset() {
    Logout();
    setEntries(null);
  }

  return (
    <>
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
        {entries ? (
          entries.length ? (
            <EntryList />
          ) : (
            <div className="empty-notice">
              {" "}
              No journal notes for this month{" "}
            </div>
          )
        ) : (
          <div className="empty-notice"> No journal notes for this month </div>
        )}
        <EntryForm />
      </Container>
    </>
  );
};

export default Home;
