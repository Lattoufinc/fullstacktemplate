const dialogflow = require('dialogflow');

const sessionClient = new dialogflow.SessionsClient();

async function sendTextMessageToDialogFlow(textMessage) {
  // Define session path
  const projectId = 'events-search-2565a'; //https://dialogflow.com/docs/agents#settings
  const sessionId = 'quickstart-session-id';
  // const query = 'are there any upcoming musicals in Amman';
  const languageCode = 'en-US';
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: textMessage,
        languageCode
      }
    }
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    console.log('DialogFlow.sendTextMessageToDialogFlow: Detected intent');
    const result = responses[0].queryResult;
    console.log('type', responses[0].queryResult.fulfillmentMessages[0].suggestions.suggestions);
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    return responses;
  } catch (err) {
    console.error('DialogFlow.sendTextMessageToDialogFlow ERROR:', err);
    throw err;
  }
}

module.exports = { sendTextMessageToDialogFlow };
