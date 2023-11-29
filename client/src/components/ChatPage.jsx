import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
    return (
        <div className='chat'>
            <ChatBar />
            <div className='chat_main'>
                <ChatBody />
                <ChatFooter />
            </div>
        </div>

    )
}

export default ChatPage;