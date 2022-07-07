const dialogflow = require("dialogflow");
const config = require("../config/config");

const projectId = config.project_id;
const sessionId = config.session_id;
const privateKey = config.private_key;

const userCredentials = {
  client_email: config.client_email,
  private_key: privateKey,
}


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Create a new session
const sessionClient = new dialogflow.SessionsClient({projectId, credentials: userCredentials});

const detectUserIntent = async (userInput, userId) => {
  // Connect to dialogflow
  const sessionPath = sessionClient.sessionPath(projectId, sessionId + userId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: userInput,
        // The language used by the client (en-US)
        languageCode: "en-US",
      },
    },
  };

  // Detect intent
  try {
    const responses = await sessionClient.detectIntent(request);
      // Filter intent and return the result
    return responses[0].queryResult;
  }catch(err){
    console.log(err);
  }
};


const sendMessage = async (message, senderId) => {
try {
  await client.messages
  .create({
     from: 'whatsapp:+14155238886',
     body: message,
     to: senderId
   })
  .then(message => console.log(message.sid));
} catch (error) {
  console.log(error);
}

}

// Export the function
module.exports = {
  detectUserIntent,
  sendMessage
}
