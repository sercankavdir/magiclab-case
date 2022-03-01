const { initializeApp, cert } = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
let db;
try {
  initializeApp({
    credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    databaseURL: "https://magiclab-case.firebaseio.com",
  });
  db = getFirestore();
} catch (error) {
  console.log("Cannot connect to database", error);
}

module.exports = db;
