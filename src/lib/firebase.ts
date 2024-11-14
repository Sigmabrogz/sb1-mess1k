import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAfjtx_41KdrcqsHkveK0WkODv54oOoFA",
  authDomain: "deai-bfdde.firebaseapp.com",
  projectId: "deai-bfdde",
  storageBucket: "deai-bfdde.firebasestorage.app",
  messagingSenderId: "967610067668",
  appId: "1:967610067668:web:67850c86b5aff36d7b6941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

// Helper function to check if user is authenticated
export const isAuthenticated = () => {
  return auth.currentUser !== null;
};

// Helper function to get current user ID
export const getCurrentUserId = () => {
  return auth.currentUser?.uid;
};