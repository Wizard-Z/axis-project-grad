import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCtO90XZykDMUmVVKab86DXghucsQrAbjg",
  authDomain: "auth-development-770b0.firebaseapp.com",
  databaseURL: "https://auth-development-770b0.firebaseio.com",
  projectId: "auth-development-770b0",
  storageBucket: "auth-development-770b0.appspot.com",
  messagingSenderId: "709440666613",
  appId: "1:709440666613:web:45c2f36879c55bd2f03ebc"
})

export const auth = app.auth()
export default app
