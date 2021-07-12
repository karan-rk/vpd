
import firebase from "firebase";
// const apikey = 'secret_kK5KNRd6Zn7kSlMfXOqNSf1S9cL1Oa1KJQUe1umYsDi'
firebase.initializeApp({
    apiKey: "AIzaSyA9C0KYn8VJbdqhdviD2Tlv9qB82ZRFzqY",
    authDomain: "vdp-project-d09fd.firebaseapp.com",
    projectId: "vdp-project-d09fd",
    storageBucket: "vdp-project-d09fd.appspot.com",
    messagingSenderId: "305179282624",
    appId: "1:305179282624:web:bcdf34be5a66481f7ab125"
})

const db = firebase.firestore();
const responses = db.collection('responses')
export async function init() {
    // responses.add({ name: 'test' })
    // console.log((await responses.get()).docs)
}

export async function respond({ name, number, email, message }) {
    return await responses.add({ name, number, email, message })
}