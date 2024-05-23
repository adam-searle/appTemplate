import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNaz9-n4uBY06ts6K-x5TOCMXvEZN7d_0",
  authDomain: "calmfocus-3321a.firebaseapp.com",
  projectId: "calmfocus-3321a",
  storageBucket: "calmfocus-3321a.appspot.com",
  messagingSenderId: "300398017560",
  appId: "1:300398017560:web:051159852bad269fe0976d",
  measurementId: "G-15SYWL3M2Q",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const firestore = getFirestore(app);

let analytics;
isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch(console.error);

export { auth, firestore, analytics };
