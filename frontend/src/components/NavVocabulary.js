import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { VOCABULARY_MYWORDS_ROUTE ,VOCABULARY_ADD_WORD } from "../utils/consts";
import "./styles/NavVocabulary.css"

const CustomToggler = ({ onClick }) => {
    return (
      <a 
        className="nav-link d-md-bloc d-lg-none nav-select" 
        onClick={onClick}
      >
        Select options
      </a>
    );
  };

const NavVocabulary = () =>{

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded(!expanded);
    };
    return (
        <Navbar className="pt-1 pb-0" data-bs-theme="dark" expand="lg">
        <Navbar.Toggle  as={CustomToggler} onClick={handleToggle} />
        <Navbar.Collapse  className={expanded ? 'show' : ''}>
                <Nav className="nav-vocabulary-container">
                    <Nav.Link className="me-3 ms-3" as={Link} to={VOCABULARY_MYWORDS_ROUTE}>My vocabulary</Nav.Link>
                    <Nav.Link className="me-3 ms-3" as={Link} to={VOCABULARY_ADD_WORD}>Add new word</Nav.Link>
                    <Nav.Link className="me-3 ms-3">Random word</Nav.Link>
                    <Nav.Link className="me-3 ms-3">Practice all words</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
)
}

export default NavVocabulary