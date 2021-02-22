import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4ZIV4tEmD63K5BZDfKwK3gbYcO6vzZcA",
  databaseURL: "https://chatapp-78def-default-rtdb.firebaseio.com/",
  projectId: "chatapp-78def",
  appId: "1:459151517238:android:28a0f0eff08b142bac9a97",
};

export default Firebase.initializeApp(firebaseConfig);
