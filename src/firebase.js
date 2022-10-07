import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtP2Hwv_-v641OmlZYgo0seIzkWqrsluo",
    authDomain: "netflix-clone-build-a1dfc.firebaseapp.com",
    projectId: "netflix-clone-build-a1dfc",
    storageBucket: "netflix-clone-build-a1dfc.appspot.com",
    messagingSenderId: "214195255803",
    appId: "1:214195255803:web:0908a232090a3c6288335e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;