import { useState, useEffect } from "react";
import axios from "axios";
import NewChatMessage from "../Components/NewChatMessage";

function ChatMessagesList({ reloadMessageList, counter }) {
    const [messages, setMessages] = useState({
        loading: true,
        items: [],
    });

    const loadMessages = async () => {
        setMessages({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8070/chat-messages';
            const response = await axios.get(url);
            // setMessages({
            //     loading: false,
            //     items: [response.data],
            // });
        } catch (e) {
            alert('Whoops, something went wrong');
            setMessages({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadMessages();
    }, [counter])

    let content = <h5>Loading...</h5>
    if (!messages.loading && messages.items.length === 0) {
        content = <h5>No tasks added</h5>
    } else if (!messages.loading) {
        const messagesElements = messages
            .items
            .map((username, message, time, index) => <NewChatMessage
                username={username}
                message={message}
                time={time}
                key={index}
                reloadMessageList={reloadMessageList}
            />)

        content = (
            <ul className="list-group">
                {messagesElements}
            </ul>
        )
    }

    return (
        <ul className="list-group bg-secondary fw-bold overflow-auto" style={{ height: '400px' }}>
            {content}
        </ul>
    )
}

export default ChatMessagesList;