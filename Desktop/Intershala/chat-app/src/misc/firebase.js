import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDPfugIiGuvX6GXc0qLpliZ8GkSiMFQvJo',
  authDomain: 'chat-web-app-cebb4.firebaseapp.com',
  projectId: 'chat-web-app-cebb4',
  storageBucket: 'chat-web-app-cebb4.appspot.com',
  messagingSenderId: '829553964571',
  appId: '1:829553964571:web:6361ee668eea484a28eabe',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
