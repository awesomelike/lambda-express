/* eslint max-len: ["error", { "ignoreComments": true }] */
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app');

const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event, ctx, callback) => {
  try {
    // This is how invokedFunctionArn looks like ==> arn:aws:lambda:ap-northeast-2:424227383:function:test
    const { 4: AWS_ACCOUNT_ID } = ctx.invokedFunctionArn.split(':');
    ctx.callbackWaitsForEmptyEventLoop = false;
    console.log('ACCOUNT_ID', AWS_ACCOUNT_ID);

    // event.path ==> /posts/1 (anything after the specified root in template.yml)
    // event.pathParametes ==> {proxy: "posts/1"}
    if (event.path && event.pathParameters) {
      awsServerlessExpress.proxy(server, event, ctx);
    }
  } catch (error) {
    callback(error);
  }
};
