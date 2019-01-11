const dialogflow = require('dialogflow');

const dotenv = require('dotenv');
dotenv.config();

// for api authentication follow https://medium.com/@tzahi/how-to-setup-dialogflow-v2-authentication-programmatically-with-node-js-b37fa4815d89
const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
    client_email: process.env.DIALOGFLOW_CLIENT_EMAIL
  }
});

function checkType(results) {
  const served = { answer: [] };

  for (let i = 0; i < results.length; i++) {
    if (results[i].text) {
      var type = 2;
      var server = results[i].text.text[0];
      served.answer.push({ server, type });
    } else if (results[i].simpleResponses) {
      var type = 2;
      var server = results[i].simpleResponses.simpleResponses[0].textToSpeech;
      served.answer.push({ server, type });
    } else if (results[i].suggestions) {
      type = 1;
      var server = results[i].suggestions.suggestions;
      served.answer.push({ server, type });
    } else if (results[i].linkOutSuggestion) {
      type = 3;
      console.log(results[i].linkOutSuggestion, 'wewo');
      var server = [results[i].linkOutSuggestion.destinationName, results[i].linkOutSuggestion.uri];
      served.answer.push({ server, type });
    }
  }
  // if (result.intent) {
  //   console.log(`  Intent: ${result.intent.displayName}`);
  // } else {
  //   console.log(`  No intent matched.`);
  // }
  return served;
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
    console.log(responses.expectedInputs, 'fifi17');
    const result = responses[0].queryResult.fulfillmentMessages;

    return checkType(result);
  } catch (err) {
    console.error('DialogFlow.sendTextMessageToDialogFlow ERROR: ', err);
    // throw err;
  }
}

module.exports = { sendTextMessageToDialogFlow };
