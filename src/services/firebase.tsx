import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWkLFlP6SeZ7GTBPBmarvYt7LdZS0Mc34",
    authDomain: "appvite-ed80c.firebaseapp.com",
    projectId: "appvite-ed80c",
    storageBucket: "appvite-ed80c.appspot.com",
    messagingSenderId: "768510317651",
    appId: "1:768510317651:web:ac9806b3d84a9e36a7e2a6"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export { provider }