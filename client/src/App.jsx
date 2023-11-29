import socketIO from 'socket.io-client'
const socket = socketIO.connect('http://localhost:4000')
import './App.css'

function App() {
  

  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

export default App
