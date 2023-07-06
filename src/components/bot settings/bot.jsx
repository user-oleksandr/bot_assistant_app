import React, { useEffect, useState } from "react";
import "./bot.css";
import bootResponse from "./BotResponse";
import userAvatar from "./icons/user-icon.png";
import botAvatar from "./icons/bot-icon.png";
import { conditions } from "./botConditions";

function Bot() {
    const [chatLog, setChatLog] = useState([
        {
            message:
                "Привіт! Я твій персональний асистент! Я тобі допоможу, тож обирай...",
            sender: "bot",
        },
    ]);
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [botExpanded, setBotExpanded] = useState(true);

    useEffect(() => {
        scrollToBottom();
    }, [chatLog]);

    useEffect(() => {
        if (selectedQuestion) {
            handleSendButtonClicked();
        }
    }, [selectedQuestion]);

    function clearChatLog() {
        setChatLog([]);
    }

    function addMessageToChatLog(message, sender) {
        if (message === "/clear") {
            clearChatLog();
        } else {
            const newMessage = { message, sender };
            setChatLog((prevChatLog) => [...prevChatLog, newMessage]);
        }
    }

    function handleSendButtonClicked() {
        if (selectedQuestion) {
            addMessageToChatLog(selectedQuestion, "user");

            if (selectedQuestion === "/clear") {
                clearChatLog();
            } else {
                setTimeout(() => {
                    bootResponse(selectedQuestion, addMessageToChatLog);
                }, 2000);
            }
            setSelectedQuestion("");
        }
    }

    function scrollToBottom() {
        const chatLogContainer = document.getElementById("chat-log");
        chatLogContainer.scrollTop = chatLogContainer.scrollHeight;
    }

    function handleToggleButtonClick() {
        setBotExpanded((prevExpanded) => !prevExpanded);
    }

    return (
        <div className={`card-body ${botExpanded ? "expanded" : "collapsed"}`}>
            <div id="chat-log">
                {chatLog.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <img
                            src={message.sender === "user" ? userAvatar : botAvatar}
                            alt={message.sender}
                            className="avatar"
                        />
                        <p style={{ animationDelay: `${index * 0.1}s` }}>
                            {message.message}
                        </p>
                    </div>
                ))}
            </div>
            {botExpanded && (
                <div>
                    <div className="box-select">
                        <select
                            id="question-dropdown"
                            value={selectedQuestion}
                            onChange={(event) => setSelectedQuestion(event.target.value)}
                        >
                            <option value="">select question</option>
                            {Object.keys(conditions).map((question, index) => (
                                <option key={index} value={question}>
                                    {question}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="buttons">
                        <button
                            id="send-button"
                            onClick={handleSendButtonClicked}
                            disabled={selectedQuestion !== ""}
                        >
                            Send
                        </button>
                        <button id="clear-button" onClick={clearChatLog}>
                            Clear Chat
                        </button>
                    </div>
                </div>
            )}
            <button id="toggle-button" onClick={handleToggleButtonClick}>
                {botExpanded ? "▼ закрити Bot" : "▲ відкрити Bot"}
            </button>
        </div>
    );
}

export default Bot;
