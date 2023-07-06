import {conditions} from "./botConditions";


function bootResponse(userMessage, addMessageToChatLog) {
    for (const condition in conditions) {
        if (userMessage.toLowerCase().includes(condition)) {
            const botMessage = conditions[condition];
            addMessageToChatLog(botMessage, 'bot');

            if (condition === "maps") {
                window.open("https://maps.google.com", "_blank");
            }

            if (condition === "google") {
                window.open("https://www.google.com", "_blank");
            }

            if (condition === "mail") {
                window.open("mailto:");
            }

            if (condition === "погода") {
                window.open("https://www.sinoptik.ua", "_blank");
            }

            if (condition === "youtube") {
                window.open("https://www.youtube.com", "_blank");
            }

            if (condition === "music") {
                window.open("https://music.youtube.com/", "_blank");
            }

            if (condition === "telegram") {
                window.open("https://t.me/", "_blank");
            }

            return;
        }
    }

    const botMessage = "Вибачте, я не розумію цього запиту. Можливо, спробуйте інше питання.";
    addMessageToChatLog(botMessage, 'bot');
}

export default bootResponse;
