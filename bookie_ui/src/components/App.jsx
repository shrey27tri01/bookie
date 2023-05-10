import React, { Component, useState, useEffect }  from 'react';
// import { UserContext } from "../AuthContext";
import parseJwt from '../parseJwt';
import Urls from "../Urls";
import Layout from './Layout';
import Book from "./Book";

import { AuthProvider } from '../Contexts/AuthContext';

function App() {

  return (
    <AuthProvider>
      <div className='App'>
        {/* <Book /> */}
        <Layout>
          <Urls/>
        </Layout>
      </div>
    </AuthProvider>
  );
}

export default App;