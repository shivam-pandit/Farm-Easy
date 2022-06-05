import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import  config from "./config.json"

firebase.initializeApp(config)

//flag => using google
let provider = new firebase.auth.GoogleAuthProvider()

//object jiske andar login/logout/signin functionality hai
export const auth = firebase.auth();



export const firestore = firebase.firestore();
// export const storage = firebase.storage();

export const signInWithGoogle = ()=>{
    auth.signInWithPopup(provider);
}


export default firebase;