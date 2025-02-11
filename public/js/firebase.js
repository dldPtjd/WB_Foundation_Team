let firebaseConfig = {
    apiKey: "AIzaSyBPMlJ16AKV9_ZNDWY8zwfEKyHEaa2Bj2U",
    authDomain: "wft-official-website.firebaseapp.com",
    projectId: "wft-official-website",
    storageBucket: "wft-official-website.firebasestorage.app",
    messagingSenderId: "1064235994661",
    appId: "1:1064235994661:web:662237b6d6c5dc4db079cc",
    measurementId: "G-BNEN7MDELT"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();