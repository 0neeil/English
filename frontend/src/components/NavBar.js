import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setRegStatus, setLoginStatus, setAuthError } from "../store/actions/authActions";
import {
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
  VOCABULARY_MYWORDS_ROUTE,
} from "../utils/consts";

import "./styles/NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.auth.isLogined);

  const handleToggle = (newIsReg) => {
    dispatch(setAuthError([]))
    dispatch(setRegStatus(newIsReg));
  };

  const handleSubmit = (newIsLogin) => {
    dispatch(setLoginStatus(newIsLogin));
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <div className="custom-container d-flex justify-content-between">
        <div className="navbar-brand d-none d-sm-none d-md-block">
          <Navbar.Brand as={Link} to={MAIN_ROUTE}>
            <div className="navbar-title navbar-title1">Learn English</div>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbar-dark-example" className="nav-toggle" />
          <Navbar.Collapse id="navbar-basic-example nav-container">
            <Nav className="me-auto d-flex justife-content-between">
              <Nav.Link as={Link} to={MAIN_ROUTE} className="text-white navbar-btn">
                Home
              </Nav.Link>

              {isLogined && (
                <div className="d-flex">
                  <Nav.Link as={Link} to={VOCABULARY_MYWORDS_ROUTE} className="text-white navbar-btn">
                    Vocabulary
                  </Nav.Link>
                  <Nav.Link as={Link} to={PROFILE_ROUTE} className="text-white navbar-btn">
                    Profile
                  </Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Settings"
                    menuVariant="dark"
                    className="navbar-btn"
                  >
                    <NavDropdown.Item as={Link} to={SETTINGS_ROUTE}>Change password</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={SETTINGS_ROUTE} href="#action/3.2">Change email</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                </div>
              )}
              
              {isLogined ? (
                <Nav.Link
                  as={Link}
                  className="text-white navbar-btn"
                  to={MAIN_ROUTE}
                  onClick={() => { handleSubmit(false); localStorage.clear(); }}
                >
                  Log out
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    className="text-white navbar-btn"
                    to={REGISTRATION_ROUTE}
                    onClick={() => handleToggle(true)}
                  >
                    Sign Up
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-white navbar-btn"
                    to={LOGIN_ROUTE}
                    onClick={() => handleToggle(false)}
                  >
                    Log In
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;