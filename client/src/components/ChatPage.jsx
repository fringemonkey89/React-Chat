import React , { useState, useEffect} from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
    // declare state variable message and a function to update it using useState
    // the initial value of messages is an mepty array
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // set up an effect to listen for 'messageresponse' events from the socket and update the 'messages' state
        socket.on('messageResponse', (data) => setMessages([...messages, data]))
        // the effect will run whenever the 'socket' or 'messages' dependencies change
        // when a messageResponse event is received, the callback function is executed, updating the messages state
        // with the new message by spreading the existing messages and adding the new message at the end
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