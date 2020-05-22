/* eslint-disable no-console */

require('dotenv').config();
const { App } = require('@slack/bolt');
const requestHandler = require('./Handlers/requestHandler');


const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();

// /setthreshold office1 12
// /getthreshold office1
// /whosattending office1 today,tomorrow,dd/MM/yy
// /removeme office1 today,tomorrow,dd/MM/yy
app.command('/setthreshold', requestHandler.handleSetThresholdRequest);

app.command('/getthreshold', requestHandler.handleGetThresholdRequest);

app.command('/whosattending', requestHandler.handleGetWhoIsAttendingRequest);

app.command('/removeme', requestHandler.handleRemoveMeRequest);
