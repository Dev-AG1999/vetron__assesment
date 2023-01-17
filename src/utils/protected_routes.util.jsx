import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import SigninPage from '../pages/signin.page'
import { UserContext } from "../App";



const useAuth =()=>{
    // const user = {loggedIn: false}
    const { user } = useContext(UserContext)
    return user && user.loggedIn
}


const ProtectedRoutes = () => {

    const location = useLocation();
    const isAuth = useAuth()
  return isAuth ? <Outlet/>:<Navigate to="/" replace state={{ from: location }} />
}

export default ProtectedRoutes