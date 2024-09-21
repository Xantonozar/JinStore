import React from 'react'
import { userState } from './Context'
import Login from "./LoginPage/LoginPage"
import SignUp from "./main/MyComponent"
const MainPage = () => {
    const { userExist } = userState()
  return (
    <div>
        {
            userExist ? (<><Login/></>):(<><SignUp/></>)  
        }
        </div>
  )
}

export default MainPage