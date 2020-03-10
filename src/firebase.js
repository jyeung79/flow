import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA9zmEaAOglm40J5XHPWRT3h-rAAy3I_LY",
    authDomain: "breeze-todoist.firebaseapp.com",
    databaseURL: "https://breeze-todoist.firebaseio.com",
    projectId: "breeze-todoist",
    storageBucket: "breeze-todoist.appspot.com",
    messagingSenderId: "33214411727",
    appId: "1:33214411727:web:551e34d27f068fb29f58ba"
});

export { firebaseConfig as firebase };