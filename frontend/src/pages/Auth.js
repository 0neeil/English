import React, { useState } from "react";
import { Form, Button, NavLink, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { registration, login, getUser } from "../http/userAPI";
import { setRegStatus, setLoginStatus, setAuthError } from "../store/actions/authActions";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import "./styles/Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isReg = useSelector((state) => state.auth.isReg);
  const isErrors = useSelector((state) => state.auth.isErrors)
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleSendForm = async (event) => {
    let response
    if (isReg === true) {
      if(password === confirmPassword){
        response = await registration(email, username, password)
        if(response.status !== 200){
          dispatch(setAuthError([{msg: response.response.data.message}]))
        }
        else{
          alert('Successful registration. Please log in')
          handleToggle()
          navigate('/login')
        }
      }
      else
        dispatch(setAuthError([{msg: "Passwords do not match"}]))
    } 
    else {
      response = await login(email, password)
      if(response.status !== 200){
        dispatch(setAuthError([{msg: response.response.data.message}]))
      }
      else{
        
        
        localStorage.setItem('token', response.data.token)

        const {data} = await getUser()
        localStorage.setItem('user', JSON.stringify(data))
        handleSubmit(true)
        navigate('/')
      }
    }
  };

  const handleSubmit = (newLoginStatus) => {
    dispatch(setLoginStatus(newLoginStatus))
}

  const handleToggle = () => {
    dispatch(setAuthError([]))
    dispatch(setRegStatus(!isReg));
  };

  return (
    <div className="bg-dark row no-gutters auth-container">
      <animated.div style={fadeIn} className="text-white col-7 d-none d-sm-none d-md-block">asd</animated.div>
      <div className="text-white col-5 d-sm-block d-md-flex justify-content-end auth-form">
        <Form>
        {isErrors.length > 0 && (
                       <div className="auth-errors">
                            {isErrors.map((element, index) => (
                                <div key={index} style={{ textAlign: "center" }}>
                                    <p>{element.msg}</p>
                                </div>
                            ))}
                        </div>
                    )}
          {!isReg ?           
          <Form.Group className="mb-3 auth-input" controlId="username">
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
              type="text" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>
          :
          <>          
            <Form.Group className="mb-3 auth-input" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3 auth-input" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required />
            </Form.Group>
          </>
          }
          <Form.Group className="mb-3 auth-input" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required />
          </Form.Group>
          {isReg && (
            <Form.Group className="mb-3 auth-input" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
              type="password" 
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
              required />
            </Form.Group>
          )}
          <FormGroup>   
                 
            <NavLink 
              as={Link} 
              onClick={ handleToggle} 
              className="mb-3 auth-registration-link" 
              to={isReg ? LOGIN_ROUTE : REGISTRATION_ROUTE}
            > 
              {isReg ? 
              "Do you already have an account? Log in!" 
              : 
              "Don't have an account yet? Sign up!"
              }
            </NavLink>
          </FormGroup>

          <Button 
            className="auth-button" 
            variant="primary" 
            type="button"  
            onClick={() => handleSendForm()}
          >
            {isReg ? "Register" : "Login"}
          </Button>

        </Form>
      </div>
    </div>
  );
};

export default Auth;