import MessageForm from "../components/MessageForm";
import MessageDisplay from "../components/MessageDisplay";
import MessageHistory from "../components/MessageHistory";
import React, { useState } from "react";

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const [messageArray, setMessageArray] = useState([])

    const youveGotMail = (newMessage) => {
        console.log("This is from my message form component: ", newMessage);
        setCurrentMsg(newMessage);
        setMessageArray([...messageArray, newMessage])
    };
    return (
        <div>
        <MessageForm onNewMessage={youveGotMail} />

        <MessageDisplay message={currentMsg} />

        <MessageHistory messageArray={messageArray}/>
        </div>
    );
};

export default MessageBoard;
