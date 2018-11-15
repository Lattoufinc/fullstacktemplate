const dialogflow = require('dialogflow');

const sessionClient = new dialogflow.SessionsClient();

function checkType(results) {
  if (results.fulfillmentText) {
    console.log('detected simple response');
    var type = 2;
    var server = results.fulfillmentText;
    return { server, type };
  } else if (results.fulfillmentMessages[0].suggestions.suggestions[0].title) {
    type = 1;
    var server = results.fulfillmentMessages[0].suggestions.suggestions;
    return { server, type };
  }

  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
}

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
    const object = checkType(result);
    console.log(object);
    return object;
  } catch (err) {
    console.error('DialogFlow.sendTextMessageToDialogFlow ERROR:', err);
    throw err;
  }
}

module.exports = { sendTextMessageToDialogFlow };
