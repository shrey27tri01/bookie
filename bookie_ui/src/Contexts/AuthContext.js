// import React, { createContext, useState } from 'react';
// import axiosInstance from './axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userID, setUserID] = useState(null);

//   const login = (userID) => {
//     setIsLoggedIn(true);
//     setUserID(userID);
//     // Make an axios request to retrieve the user's username here and update the state accordingly
//     axiosInstance
//       .get(`user/get_user_info/`,
//             { headers: { 
//                 Authorization: `JWT ${localStorage.getItem('access_token')}` 
//               } }
//       ).then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserID(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, userID, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



import React, {useState, useEffect, useContext} from 'react';

const AuthContext = React.createContext();

export function useAuth () {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    authUser, 
    setAuthUser,
    isLoggedIn, 
    setIsLoggedIn
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}