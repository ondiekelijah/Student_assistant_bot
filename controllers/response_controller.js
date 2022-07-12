const { menuMessage,portalsMessage, eventsMessage,unknownMessage} = require('../helpers/messages');

const actionBasedResponse = async (action) => {
    switch (action) {
        case 'studentassistant.MENU':
            return menuMessage();
        case 'studentassistant.PORTALS':
            return portalsMessage();
        case 'studentassistant.EVENTS':
            return eventsMessage();
        default:
            return unknownMessage();
    }
}

module.exports = {
    actionBasedResponse
};