const functions = require('firebase-functions');
const fetch = require('node-fetch');
require('dotenv').config()

const cors = require('cors');
// Automatically allow cross-origin requests


// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

var express = require('express')
var app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use(cors({ origin: true }));


const TELEGRAM = process.env.TELEGRAM_BASE + process.env.TELEGRAM_KEY;

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());``
  });

// exports.newMessage = functions.https.onRequest(async (req, res) => {
// });

function sendTelegramMessage(chat) {
    fetch(`${TELEGRAM}/sendMessage`, {
        method: 'post',
        body:    JSON.stringify(chat),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(console.log)
    .catch(console.log);
}

app.post('/', ({body: {message: {chat: {"id": chatId}, text}, message}}, res) => {
// app.post('/', (req, res) => {
    if (message) {
        res.send("OK");
        sendTelegramMessage({
            "chat_id": chatId,
            "text": "¡Ay " + text
        });
    }
    });

exports.newMessage = functions.https.onRequest(app);