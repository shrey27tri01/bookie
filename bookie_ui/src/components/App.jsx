import React, { Component, useState, useEffect }  from 'react';
// import { UserContext } from "../AuthContext";
import parseJwt from '../parseJwt';
import Urls from "../Urls";
import Layout from './Layout';
import Book from "./Book";

import { AuthProvider } from '../Contexts/AuthContext';
import Dashboard from './Dashboard';

function App() {

  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   // retrieve user details from localStorage
  //   const storedUserAccessToken = localStorage.getItem("access_token");

  //   if (storedUserAccessToken) {      
  //     setUser(parseJwt(storedUserAccessToken));
  //   }
  // }, []);

  // console.log("user", user);
  // console.log("user_id", user.user_id);

  return (
    // <AuthProvider>
    //   <div className='App'>
    //     {/* <Book /> */}
    //     <Layout>
    //       <Urls/>
    //     </Layout>
    //   </div>
    // </AuthProvider>
    <AuthProvider>
      <Dashboard> </Dashboard> 
    </AuthProvider>
  );
}

export default App;