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
        setUserObj({
          displayName:user.displayName,
          uid:user.uid,
          updateProfile:(args)=> user.updateProfile(args)
        })
      } else{
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  const refreshUser=()=>{
    const user=authService.currentUser
    setUserObj({ // user에서 값을 세분화 시켜서 분리해서 사용
      displayName:user.displayName,
      uid:user.uid,
      updateProfile:(args)=> user.updateProfile(args)
    })
    console.log(authService.currentUser)
  }
  return (
    <>
      {init ? <Router refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initialzing..."}
      <footer>
        &copy; {new Date().getFullYear()} Nwitter. All Right Reserved.
      </footer>
    </>
  );
}

export default App;
