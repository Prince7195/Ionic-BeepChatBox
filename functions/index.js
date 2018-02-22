const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addMessages = functions.database.ref(`/messages/{messagesId}`)
  .onWrite(event => {

    const messageKey = event.data.key;
    const messageValue = event.data.val();

    console.log({
      key: messageKey,
      val: messageValue
    })

    admin.database().ref(`/user-messages/${messageValue.userFromId}/${messageValue.userToId}`).child(messageKey).set(1);
    admin.database().ref(`/user-messages/${messageValue.userToId}/${messageValue.userFromId}`).child(messageKey).set(1);

  });

exports.generateLastMessage = functions.database.ref(`/messages/{messagesId}`)
  .onWrite(event => {

    const messageKey = event.data.key;
    const messageValue = event.data.val();

    admin.database().ref(`/last-messsages/${messageValue.userFromId}/${messageValue.userToId}`).child('key').set(messageKey);
    admin.database().ref(`/last-messsages/${messageValue.userToId}/${messageValue.userFromId}`).child('key').set(messageKey);

  })
