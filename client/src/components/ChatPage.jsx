import React , { useState, useEffect} from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]))
    }, [socket, messages])

            // socket.on('messageResponse', (data) => setMessages(mess=>[...mess, data]));
            // }, [socket])
    return (
        <div className='chat'>
            <ChatBar socket={socket} />
            <div className='chat_main'>
                <ChatBody messages={messages} />
                <ChatFooter socket={socket} />
            </div>
        </div>

    )
}

export default ChatPage;