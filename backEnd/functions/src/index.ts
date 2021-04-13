import * as admin from "firebase-admin";

import * as functions from "firebase-functions";
// import { Barrage } from "./constants";

admin.initializeApp();
export const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloLeeker = functions.https.onCall((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return 'Yo whats up Coin Leekers!'
});

export const storeJoinUsEmail = functions.https.onCall(async (data, _context) => {
  try {
    const joinUsEmailDocRef = db.collection("join_us_email").doc();
    const email = {
      id: joinUsEmailDocRef.id,
      email: data.email,
    };
    const dbResponse = await joinUsEmailDocRef.set(email);
    return dbResponse;
  } catch (error) {
    return "failed to store email";
  }
});