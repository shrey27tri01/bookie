import React, { Component, useState, useEffect }  from 'react';
// import { UserContext } from "../AuthContext";
import parseJwt from '../parseJwt';
import Urls from "../Urls";
import Layout from './Layout';
import Book from "./Book";

import { useAuth } from '../Contexts/AuthContext';

import { AuthProvider } from '../Contexts/AuthContext';

function App() {

  // const {setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();
  // setIsLoggedIn(localStorage.getItem('access_token') ? true : false);
  // setAuthUser({
  //   Name: localStorage.getItem('user_name'),
  // });

  return (
    <AuthProvider>
      <div className='App'>
        <Layout>
          <Urls/>
          {localStorage.getItem('user_name') ? (
            <Book />
          ) : (
            <></>
          )} 
          
        </Layout>
      </div>
    </AuthProvider>
  );
}

export default App;