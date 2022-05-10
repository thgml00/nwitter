// import './App.css';
import Router from "./Router";
import React, {useEffect, useState} from 'react'
import { authService } from '../fbase';

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [userObj, setUserObj] =useState(null)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true)
        setUserObj(user)
      } else{
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initialzing..."}
      <footer>
        &copy; {new Date().getFullYear()} Nwitter. All Right Reserved.
      </footer>
    </>
  );
}

export default App;
