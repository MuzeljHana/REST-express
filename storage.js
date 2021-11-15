let storage = {
    messages: []
}

module.exports = {
    addMessage: (message) => {
        storage.messages.push(message);
        return message;
    },

    getMessage: (id) => {
        return storage.messages.find(message => message.id == id);
    },

    getAllMessages: () => {
        return storage.messages;
    },

    updateMessage: (message) => {
        let old_message = storage.messages.find(message2 => message2.id == message.id);
        let index = storage.messages.indexOf(old_message);
        old_message.message = message.message;
        storage.messages[index] = old_message;
        return old_message;
    },

    removeMessage: (id) => {
        let message = storage.messages.find(message => message.id == id);
        storage.messages.pop(storage.messages.indexOf(message));
        return message;
    }
}
