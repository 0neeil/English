import { is } from "@react-spring/shared";
import React from "react";
import { Form, Button, NavLink, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { setRegStatus, setLoginStatus } from "../store/actions/authActions";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import "./styles/Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isReg = useSelector((state) => state.auth.isReg);
  const isLogined = useSelector((state) => state.auth.isLogined);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Ваша логика обработки данных формы
  //   if (isReg) {
  //     // Логика для регистрации
  //   } else {
  //     // Логика для входа
  //   }
  // };

  const handleSubmit = (newLoginStatus) => {
    dispatch(setLoginStatus(newLoginStatus))
}

  const handleToggle = (newRegStatus) => {
    dispatch(setRegStatus(newRegStatus));
  };

  return (
    <div className="bg-dark row no-gutters auth-container">
      <animated.div style={fadeIn} className="text-white col-7 d-none d-sm-none d-md-block">asd</animated.div>
      <div className="text-white col-5 d-sm-block d-md-flex justify-content-end auth-form">
        <Form>
          {!isReg ?           
          <Form.Group className="mb-3 auth-input" controlId="username">
            <Form.Label>E-mail/Login</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          :
          <>          
            <Form.Group className="mb-3 auth-input" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3 auth-input" controlId="username">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
          </>
          }
          <Form.Group className="mb-3 auth-input" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          {isReg && (
            <Form.Group className="mb-3 auth-input" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
          )}
          <FormGroup>   
                 
            <NavLink as={Link} onClick={() => handleToggle (!isReg)} className="mb-3 auth-registration-link" to={isReg ? REGISTRATION_ROUTE : LOGIN_ROUTE}> 
              {isReg ? 
              "Do you already have an account? Log in!" 
              : 
              "Don't have an account yet? Sign up!"
              }
            </NavLink>
          </FormGroup>

          <Button as={Link} to={MAIN_ROUTE} className="auth-button" variant="primary" type="submit" onClick={() => handleSubmit(true)}>
            {isReg ? "Register" : "Login"}
          </Button>

        </Form>
      </div>
    </div>
  );
};

export default Auth;