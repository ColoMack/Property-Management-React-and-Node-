// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBH5dLQuXdDSAO60qVyOcDy7aY3vsBOr5c",
  authDomain: "property-management-react-node.firebaseapp.com",
  projectId: "property-management-react-node",
  storageBucket: "property-management-react-node.appspot.com",
  messagingSenderId: "482801921584",
  appId: "1:482801921584:web:a33f7104cfb76d24eb07f5",
  measurementId: "G-0S47CSSK78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(); //for firestore database

// export
export {app};
export {analytics};
export {db};