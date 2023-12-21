import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar'; 
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './components/AppRouters';
import { check } from "./http/userAPI";
import { setLoginStatus } from "./store/actions/authActions"
import { useDispatch } from 'react-redux';



function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    check().then(data => {
      if (data?.status < 400) {
        if (data.role === "ADMIN") {
          
        }
        dispatch(setLoginStatus(true));
      } else {
        localStorage.clear()
        dispatch(setLoginStatus(false));
      }
    }).finally(() => setLoading(false));
  }, [dispatch]); 


  if(loading){
    return <Spinner animation={"grow"}></Spinner>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
