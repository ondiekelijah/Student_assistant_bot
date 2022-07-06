const dialogflow = require("dialogflow");

const projectId = process.env.project_id;
const sessionId = process.env.session_id;
const privateKey = process.env.private_key;

const userCredentials = {
  client_email: process.env.client_email,
  private_key: privateKey,
}

// Create a new session
const sessionClient = new dialogflow.SessionsClient({projectId, credentials: userCredentials});

const textQuery = async (userInput, userId) => {
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


// Export the function
module.exports = {
    textQuery,
    // sendToTwilio
}
