import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChatBody = ({ messages }) => {
    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem('userName')
        navigate('/')
        window.location.reload();
    }

    return (
        <>
            <header className='chat_mainHeader'>
                <p> Hangout</p>
                <button className='leaveChat_btn' onClick={handleLeaveChat}>
                    Leave Chat
                </button>
            </header>

            <div className='message_container'>
                {messages.map((message) =>
                message.name === localStorage.getItem('userName') ? (
                <div className='message_chats' key={message.id}>
                    <p className='sender_name'>You</p>
                    <div className='message_sender'>
                        <p>{message.text}</p>
                    </div>
                </div>
                ) : (
                <div className='message_chats' key={message.id}>
                    <p>{message.name}</p>
                    <div className='message_recipient'>
                        <p>{message.text}</p>
                    </div>
                </div>
                )
                )}
                
                <div className='message_status'>
                    <p>someone is typing...</p>
                </div>
            </div>
        
        </>
    )
}

export default ChatBody;