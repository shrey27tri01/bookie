import React from 'react';

import { useAuth } from '../Contexts/AuthContext';

const Dashboard = () => {

    const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();

    const logIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setAuthUser({
            Name: 'John Doe',
        });
    }

    const logOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUser(null);
    }

    return (
        <>
            <span>
                User is currently: {isLoggedIn? 'Logged In' : 'Logged out'}
            </span>
            {isLoggedIn? (<span>Username: {authUser.Name}</span>) : null}
            <br />
            {isLoggedIn? <button onClick={(e)=>{logOut(e)}}>Logout</button> : <button onClick={(e)=>{logIn(e)}}>Login</button>}
            
            
        </>
    )
}

export default Dashboard;