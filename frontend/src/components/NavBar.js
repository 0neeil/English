import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setRegStatus, setLoginStatus } from "../store/actions/authActions";
import {
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
} from "../utils/consts";

import "./styles/NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const isReg = useSelector((state) => state.auth.isReg);
  const isLogined = useSelector((state) => state.auth.isLogined);

  const handleToggle = (newIsReg) => {
    dispatch(setRegStatus(newIsReg));
    console.log("reg "+ newIsReg)
  };

  const handleSubmit = (newIsLogin) => {
    dispatch(setLoginStatus(newIsLogin));
    console.log("log "+ newIsLogin)
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
              <Nav.Link href="#link" className="text-white navbar-btn">
                Link
              </Nav.Link>
              {isLogined && (
                <Nav.Link as={Link} to={PROFILE_ROUTE} className="text-white navbar-btn">
                  Profile
                </Nav.Link>
              )}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
                className="navbar-btn"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              {isLogined ? (
                <Nav.Link
                  as={Link}
                  className="text-white navbar-btn"
                  to={MAIN_ROUTE}
                  onClick={() => handleSubmit(false)}
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