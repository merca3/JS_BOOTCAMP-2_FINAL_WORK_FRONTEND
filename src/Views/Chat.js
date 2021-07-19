import Breadcrumbs from "../Components/Breadcrumbs";
import { useState } from "react";
import ChatForm from "../Components/ChatForm";
import ChatMessagesList from "../Components/ChatMessagesList";

function Chat() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
    ]

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [counter, setCounter] = useState(0);

    const reloadTaskList = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <h2 className="text-info mb-4">Chat</h2>
            <ChatMessagesList counter={counter} reloadTaskList={reloadTaskList} />
            <ChatForm username={username} setUsername={setUsername} message={message} setMessage={setMessage} reloadTaskList={reloadTaskList} />
        </div>
    )
}

export default Chat;