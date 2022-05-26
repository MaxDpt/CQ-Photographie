import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyB4rj0_Qv6BfV3KuKFDXfIpl2uWc-tgAhE",
    authDomain: "charlinquentinphoto.firebaseapp.com",
    projectId: "charlinquentinphoto",
    storageBucket: "charlinquentinphoto.appspot.com",
    messagingSenderId: "1037884842402",
    appId: "1:1037884842402:web:81a5d3285a494bd3fed2fb",
    measurementId: "G-WVGEWZTYDK"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();