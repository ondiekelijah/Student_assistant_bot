const menuMessage= () => {
    return `Hi, I am your student assistant. How may I help you today?. ` +
        `Want to explore any of these?\n\n`
        + `*Student Assistant Menu:* \n`
        + `1- Portals \n`
        + `2- Current timetable \n`
        + `3- Events \n`
        + `4- Fee structures \n`
        + `5- Portals \n`
        + `6- Directions \n`
        + `7- Contacts \n\n`
}

const portalsMessage= () => {
    return`Here's a list of availabe portals:\n\n`
        + `*Portals Menu:* \n`
        + `1- Student portal \n`
        + `2- Masomo portal \n\n`

}

const eventsMessage= () => {
    return `Upcoming events:\n\n`
        + `1- GDSC Meetup\n\n`
        + `*Venue:* Room 1, GDSC Building, University of California, Davis\n`
        + `*Date:* Saturday, May 30, 2019\n`
        + `*Time:* 9:00 AM - 5:00 PM \n\n`
}

const unknownMessage= () => {
    return `Ooops! I didn't get that, please try another option` 
}

module.exports = {
    menuMessage,
    portalsMessage,
    eventsMessage,
    unknownMessage
}
