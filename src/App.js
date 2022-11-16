import {React, useState} from "react";
import * as dotenv from 'dotenv';
import express from 'express';
import StartPage from './views/StartPage';
import Home from "./pages/Home";
import { StreamClient } from 'getstream';
import { StreamApp } from "react-activity-feed";
import { getFromStorage } from "./utils/storage";
import users from './users';
import './index.css'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;
dotenv.config();

function App() {
//  get the user's id
const userId = getFromStorage('user');
// find the user from the users array. if it doesn't exist set to 0. 
const user = users.find(u=> u.id === userId) || user[0]

const [client, setClient] = useState(0);

useEffect(() => {
  async function init(){
    // Created the app instance. Set client to new streamclient and connect to framework using api key and app id
  const client = new StreamClient(API_KEY, user.token, APP_ID)
  await client.user(user.id).getOrCreate({...user, token: ''})
  // update the client state with the client pulled from StreamClient and getorcreate.
  setClient(client); 
  }
  init();
},[]);

  return (
  <StreamApp token={user.token} appId={APP_ID} apiKey={API_KEY}>
    <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" user={} element={<Home />} />
        </Routes>
    </Router>
  </StreamApp>
  );
}
export default App;
