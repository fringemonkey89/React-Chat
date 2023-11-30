import React, { useState} from 'react'

const ChatFooter = ({socket}) => {
    const [ message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('userName')){
            socket.emit('message',{
                text: message,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id,
            })
       }
        //console.log({ userName: localStorage.getItem('userName'), message })
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