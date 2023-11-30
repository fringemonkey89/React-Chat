import React, { useState, useEffect } from 'react'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data))
    }, [socket, users])
    return (
        <div className='chat_sidebar'>
            <h2>Open Chat</h2>
        
            <div>
            <h4 className='chat_header'>Active User</h4>
            <div className='chat_user'>
                {users.map((user) => (
                    <p key={user.socketID}>{user.userName}</p>
                ))}
            </div>
            </div>
        </div>
    )
}

export default ChatBar;