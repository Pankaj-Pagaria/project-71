import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCprmJeMAA9kpIZo1Kgt-MbXiEqoCrHGX8",
  authDomain: "project-71-8b416.firebaseapp.com",
  projectId: "project-71-8b416",
  storageBucket: "project-71-8b416.appspot.com",
  messagingSenderId: "1019328154720",
  appId: "1:1019328154720:web:802de5a7148cd265290705"
//
}
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
