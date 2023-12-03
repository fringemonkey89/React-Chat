import socketIO from 'socket.io-client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import ChatPage from './components/ChatPage';
import './App.css'

//connect to the server using the socket.io and store the socket instance in socket
const socket = socketIO.connect('http://localhost:4000')
function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Routes>
       {/* define the routes and passing the socket instance as a prop */}
        <Route path='/' element={<Home socket={socket} />}></Route>
        {/* define the routes and passing the socket instance as a prop */}
        <Route path='/chat' element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
