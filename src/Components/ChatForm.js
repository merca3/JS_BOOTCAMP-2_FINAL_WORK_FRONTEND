import axios from "axios";
import { useState } from "react";

function ChatForm( {username, setUsername, message, setMessage, reloadTaskList}) {

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

    const makeNewMessage = async () => {
        if (username === '') {
            alert('Please fill the Username!');
            return;
        }

        const url = 'http://localhost:8070/chat-messages';
        const data = {
            username: username,
            message: message,
        };

        try {
            await axios.post(url, data);
            setUsername('');
            setMessage('');
        } catch (e) {
            alert('Something went wrong when talking to the server');
        }
    }

    return (
        <form className="bg-secondary text-light p-3 my-2 text-dark rounded">
            <div className="row justify-content-between">
                <div className="col-10 text-info fw-bold">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <label>Username:</label>
                            </div>
                            <div>
                                <input className="form-control" type="text" onChange={changeUsername} value={username} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Message:</label>
                    </div>
                    <div>
                        <textarea className="form-control" onChange={changeMessage} value={message} />
                    </div>
                </div>
                <div className="col-2 d-grid gap-2 d-block align-items-end">
                    <button className="text-primary fw-bold btn btn-light btn-outline-info" type="submit" onClick={makeNewMessage} >Send</button>
                </div>
            </div>
        </form>
    )
}

export default ChatForm;