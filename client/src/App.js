import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import Home from './pages/Home'
import Feed from './pages/Feed'
import Chat from './pages/Chat'
import Signup from './pages/Signup'
import Login from './pages/Login'

// import components
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;