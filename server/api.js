// // Send request and log result

// // The text query request.
// const projectId = 'events-search-2565a'; //https://dialogflow.com/docs/agents#settings
// const sessionId = 'quickstart-session-id';
// // const query = 'are there any upcoming musicals in Amman';
// const languageCode = 'en-US';

// // Instantiate a DialogFlow client.
// const dialogflow = require('dialogflow');

// const sessionClient = new dialogflow.SessionsClient();
// const sessionPath = sessionClient.sessionPath(projectId, sessionId);
// // Define session path
// // function invokeDialog(query) {
// // console.log('invoked', query);
// const request = {
//   session: sessionPath,
//   queryInput: {
//     text: {
//       text: 'are there any upcoming musicals in Jordan',
//       languageCode: languageCode
//     }
//   }
// };

// sessionClient.detectIntent(request).then(res => {
//   console.log('Detected intent');
//   const result = res[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`);
//   } else {
//     console.log(`  No intent matched.`);
//   }
// });

// module.exports = { sessionClient };
