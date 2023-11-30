import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]))
    }, [socket, messages])
    return (
        <div className='chat'>
            <ChatBar />
            <div className='chat_main'>
                <ChatBody />
                <ChatFooter socket={socket} />
            </div>
        </div>

    )
}

export default ChatPage;