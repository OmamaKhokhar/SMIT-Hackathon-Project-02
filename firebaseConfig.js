import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js'
import { getFirestore, getDocs,collection,addDoc} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js'
// import { getAuth,} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVNezXMXE5xoL88inXn4927pfzD2Upf-Y",
  authDomain: "e-commerce-store-630b6.firebaseapp.com",
  projectId: "e-commerce-store-630b6",
  storageBucket: "e-commerce-store-630b6.firebasestorage.app",
  messagingSenderId: "933261771555",
  appId: "1:933261771555:web:b1ac6773a9c6947f250296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db ,collection,getDocs,addDoc};
