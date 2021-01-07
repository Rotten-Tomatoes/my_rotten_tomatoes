import React, { useState } from "react";
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../lib/userContext';


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  //définir l'affichage de l'APP si le user est est connecté ou non 
  // si connecté définir le rôle user ou admin 
  
  return <UserContext.Provider value={[user, setUser]}>
    <Component {...pageProps} />
  </UserContext.Provider>;

}

export default MyApp;