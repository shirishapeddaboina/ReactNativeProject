import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBWpkTpqSSskmtuzN7PcvKyKUaLpff0ugw",
    authDomain: "react-project-30882.firebaseapp.com",
    databaseURL: "https://react-project-30882-default-rtdb.firebaseio.com",
    projectId: "react-project-30882",
    storageBucket: "react-project-30882.appspot.com",
    messagingSenderId: "860993911433",
    appId: "1:860993911433:web:2894d0838af037f02fa458",
    measurementId: "G-LP6DHPR5VN"
};


firebase.initializeApp(firebaseConfig);
let database = firebase.database()

export { database }
