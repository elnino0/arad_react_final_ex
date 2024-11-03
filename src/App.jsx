import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage'
import Login from './Pages/LoginPage'
import { useState } from 'react'
import AdminPage from './Pages/AdminPage'
import UserPage from './Pages/UserPage'
import Signup from './Pages/SignupPage'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/signin" element={<Signup setLoggedIn={setLoggedIn}/>} />
          <Route path="/admin" element={<AdminPage loggedIn={loggedIn}/>} />
          <Route path="/consumer" element={<UserPage loggedIn={loggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App