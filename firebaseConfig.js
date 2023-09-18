// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD7gbEr5MqkvNrlIpC3qSc7-d2vPI-hnbA",
	authDomain: "sleep-recipe-tracker.firebaseapp.com",
	projectId: "sleep-recipe-tracker",
	storageBucket: "sleep-recipe-tracker.appspot.com",
	messagingSenderId: "785198836770",
	appId: "1:785198836770:web:4a5a8a825f8555c0d5ee7b",
	measurementId: "G-J2V5PMHJ4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
