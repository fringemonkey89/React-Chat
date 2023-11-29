import socketIO from 'socket.io-client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import './App.css'

const socket = socketIO.connect('http://localhost:4000')
function App() {
  

  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

export default App
