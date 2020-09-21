import firebase from 'firebase/app';
 
import '@firebase/auth';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyA5gsOPeVCbGlS9f8N9wpg3FT-CwCEhA6c',
    authDomain: 'my-village-app-e3494.firebaseapp.com',
    databaseURL: 'https://my-village-app-e3494.firebaseio.com',
    projectId: 'my-village-app-e3494',
    storageBucket: 'my-village-app-e3494.appspot.com',
    messagingSenderId: '608608618522',
    appId: '1:608608618522:android:9efdc795d1b5411094a9a3',
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  firebase.firestore();

  export { firebase };