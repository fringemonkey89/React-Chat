import React from 'react'

const ChatBar = () => {
    return (
        <div className='chat_sidebar'>
            <h2>Open Chat</h2>
        
            <div>
            <h4 className='chat_header'>Active User</h4>
            <div className='chat_user'>
                <p>User 1</p>
                <p>User 2</p>
                <p>User 3</p>
                <p>User 4</p>
            </div>
            </div>
        </div>
    )
}

export default ChatBar;