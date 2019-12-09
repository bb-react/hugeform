// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/database"

const firebaseConfig = {
    apiKey: 'public',
    authDomain: "localhost",
    databaseURL: "https://kokoroko-firebase.firebaseio.com/",
    projectId: "kokoroko-firebase",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const hugeFormRef = firebase.database().ref('hugeform/dev')
