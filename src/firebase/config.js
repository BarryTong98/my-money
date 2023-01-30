import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC3ueCqRQFzuQlk14-XRgPmlGPEpi3X72A",
    authDomain: "mymoney-63e76.firebaseapp.com",
    projectId: "mymoney-63e76",
    storageBucket: "mymoney-63e76.appspot.com",
    messagingSenderId: "78066947394",
    appId: "1:78066947394:web:b0446a4289d309c958a4db"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init server
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}