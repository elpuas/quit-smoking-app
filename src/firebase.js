import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
	apiKey: "AIzaSyD3ro6DB0u7cTypANkYfeBB2v_TXicyOS8",
    authDomain: "quit-smoking-e1bf0.firebaseapp.com",
    databaseURL: "https://quit-smoking-e1bf0.firebaseio.com",
    projectId: "quit-smoking-e1bf0",
    storageBucket: "quit-smoking-e1bf0.appspot.com",
    messagingSenderId: "257210369600",
    appId: "1:257210369600:web:c4090f8e4cb298dca601a5"
}
firebase.initializeApp(config);

export default firebase;