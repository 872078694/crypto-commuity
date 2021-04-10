import * as admin from "firebase-admin";

import * as functions from "firebase-functions";
// import { Barrage } from "./constants";

admin.initializeApp();
export const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onCall((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return 'hello world'
});
