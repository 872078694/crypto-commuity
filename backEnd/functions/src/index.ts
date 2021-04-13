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

const isValidEmail = (email: string):boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(re)? true : false;
}

export const storeJoinUsEmail = functions.https.onCall(async (data, _context) => {
  if(data.email == null || !isValidEmail(data.email)){
    return "Please send us a valid email"
  }
  let email = (data.email) as string;
  email = email.trim()
  try {
    const joinUsEmailDocRef = db.collection("join_us_email");
    const findExistedEmailArr = (await joinUsEmailDocRef.where('email','==',email).get()).docs.map((doc) => doc.data());
    if(findExistedEmailArr.length > 0){
      return 'You have already joined us, we will contact you shortly. Thank you!'
    }
    const emailEntry = {
      id: joinUsEmailDocRef.id,
      email: email,
    };
    await joinUsEmailDocRef.doc().set(emailEntry);
    return 'Thank you for joining us, we will contact you shortly';
  } catch (error) {
    return "There are some errors, you can come back later. Sorry!";
  }
});