import { Link } from "react-router-dom";
import { useContext } from "react";
import { EntryContext } from "../contexts/EntryContext";
import { v4 as uuidv4 } from "uuid";
import "../cssPages/FilterBar.css";
import { Col, Navbar, Row } from "react-bootstrap";
const NavbarComp = (props) => {
  const { toggleForm } = useContext(EntryContext);
  const linksOfMonths = props.monthsArray.map((month) => (
    <Col key={uuidv4()} className="filter-selection p-0" xs={3} xxl={1}>
      <Link to={`/${month}`}>{month}</Link>
    </Col>
  ));
  return (
    <Navbar className=" d-flex justify-content-center ps-md-5 pe-md-5">
      <Row className="d-flex justify-content-center ">
        {linksOfMonths}
        <Col className="filter-selection  pt-2 pb-2" xs={2} xxl={1}>
          <Link to="/"> Home </Link>
        </Col>
        <Col className="filter-selection  pt-2 pb-2" xs={2} xxl={1}>
          <Link key={uuidv4()} to="/favorites">
            Favorites
          </Link>
        </Col>

        <Col xs={1} xxl={1} className="pt-2 pb-2 ms-5 ms-md-3">
          {" "}
          <button onClick={toggleForm}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 384c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm16-208c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
            </svg>
          </button>
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavbarComp;
