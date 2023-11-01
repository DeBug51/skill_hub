import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContextProv } from "./contexts/AuthContext"

// import pages
import Feed from './pages/Feed';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <AuthContextProv>
            <Routes>
              <Route
                path = "/feed"
                element = {<Feed />}
              />
              <Route
                path = "/chat"
                element = {<Chat />}
              />
            </Routes>
          </AuthContextProv>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;