import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJhBr1IJh-R4xDC5BTe9R2JVJoSJ95UU8",
    authDomain: "edward-clothes-db.firebaseapp.com",
    projectId: "edward-clothes-db",
    storageBucket: "edward-clothes-db.appspot.com",
    messagingSenderId: "147051309370",
    appId: "1:147051309370:web:9b146d24b58c467b88c803",
    measurementId: "G-FYR5DWGX0M"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;