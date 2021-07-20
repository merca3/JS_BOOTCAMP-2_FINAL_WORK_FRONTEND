import { useState, useEffect } from "react";
import { format } from "date-fns";
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
            setMessages({
                loading: false,
                items: response.data,
            });
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

    let content = <h5 className="p-5">Loading...</h5>
    if (!messages.loading) {
        const messagesElements = messages
            .items
            .map(({ username, message, createdAt }, index) => {
                const time = format(new Date(createdAt), "dd-MM-yyyy HH:mm");
                console.log(time);
                return (
                    <NewChatMessage
                        username={username}
                        message={message}
                        time={time}
                        key={index}
                        reloadMessageList={reloadMessageList}
                    />
                )
            })

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