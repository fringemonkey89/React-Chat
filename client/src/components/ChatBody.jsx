import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChatBody = () => {
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
                <div className='message_chats'>
                    <p className='sender_name'>You</p>
                    <div className='message_sender'>
                        <p>Hello There</p>
                    </div>
                </div>
            

            
                <div className='message_chats'>
                    <p>Other</p>
                    <div className='message_recipient'>
                        <p>I'm good</p>
                    </div>
                </div>
            
                <div className='message_status'>
                    <p>someone is typing...</p>
                </div>
            </div>
        </>
    )
}

export default ChatBody;