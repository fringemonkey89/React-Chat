import React, { useState} from 'react'

const ChatFooter = ({socket}) => {
    const [ message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        // check if the message is not empty and if a username is stored in localStorage
        if(message.trim() && localStorage.getItem('userName')){
            socket.emit('message',{
                //set the text property of the message object to the current value of the message state
                text: message,
                // set the name property of the message object to the username stored in local storage
                name: localStorage.getItem('userName'),
                // generate a unique ID for the messsage using socket ID and a random number
                id: `${socket.id}${Math.random()}`,
                // set the socketId property of the message object to the socket ID
                socketId: socket.id,
            })
       }
        //console.log({ userName: localStorage.getItem('userName'), message })
        // clear the message state after sending the message
        setMessage('')
    };
    return(
        <div className='chat_footer'>
            <form className='form' onSubmit={handleSendMessage}>
                <input 
                type='text'
                placeholder='write message'
                className='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className='sendBtn'>Send</button>
                
            </form>
        </div>
    )
}

export default ChatFooter;