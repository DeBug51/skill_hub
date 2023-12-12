import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import Home from './pages/Home'

import Feed from './pages/Feed'
import Chat from './pages/Chat'
import Connect from './pages/Connect'

import Signup from './pages/Signup'
import Login from './pages/Login'
import Test from './pages/Test'
import Profile from './pages/Profile'

// import components
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route
              path = "/"
              element = {<Home />}
            />
            <Route
              path = "/signup"
              element = {<Signup />}
            />
            <Route
              path = "/login"
              element = {<Login />}
            />
            <Route
              path = "/feed"
              element = {<Feed />}
            />
            <Route
              path = "/chat"
              element = {<Chat />}
            />
            <Route
              path = "/profile"
              element = {<Profile />}
            />
            <Route
              path = "/connect"
              element = {<Connect />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;