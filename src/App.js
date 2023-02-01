import React from 'react';
import StartPage from './views/StartPage'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { StreamClient } from 'getstream'
import { StreamApp } from 'react-activity-feed'
import users from './users'
import { getFromStorage } from './utils/storage'
const API_KEY = 'hv6kcerf7qqy'
const APP_ID = '1218730'


export default function App() {
  // Gets the value of user from the browser's local storage and assigns it to the variable userid.
  const userId = getFromStorage('user')
  // Checks if the userid is present in the users array and assigns the user object to the `user` variable. If `userId` is not present in the `users` array, it assigns the first user in the `users` array to the `user` variable.
  const user = users.find((u) => u.id === userId) || users[0]
  const [client, setClient] = useState(null)

  // Upon loading the component, we will create a new streamclient instance and clien
  useEffect(() => {
    async function init() {
      //Creates a new instance of the StreamClient class, passing in the API_KEY, user.token and APP_ID as arguments. This instance will be used to interact with the Stream API and handle user authentication.
      const client = new StreamClient(API_KEY, user.token, APP_ID)
      // Calls the getOrCreate method on the client.user(user.id) object, passing in the user object with an empty token. This will either get the user or create the user if it doesn't already exist.
      await client.user(user.id).getOrCreate({ ...user, token: '' })
      
      setClient(client)
    }

    init()
  }, [])


  return (
  <StreamApp token={user.token} appId={APP_ID} apiKey={API_KEY}>
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ON path "/", router will load the <StartPage/> component */}
        <Route path="/" element={<StartPage />} />
        <Route element={<HomePage />} path="/home" />
      </Routes>
    </Router>
  </StreamApp>
  )
}