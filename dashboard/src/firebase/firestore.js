import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc } from 'firebase/firestore/lite';
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBaA_-GpAHUl3oykOpZ_4_633zlNgNLph8",
    authDomain: "moira-streaming.firebaseapp.com",
    projectId: "moira-streaming",
    storageBucket: "moira-streaming.appspot.com",
    messagingSenderId: "780321369798",
    appId: "1:780321369798:web:d35601539b3b0a29d071c7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const APP_COLLECTION = {
    movies : "movies",
}

export async function addMovies(data){
    const moviesCollectionRef = collection(db, APP_COLLECTION.movies);
    await addDoc(moviesCollectionRef, data).catch(e => {
        console.log(e);
    })
}

export async function getMovies(){
    const moviesCollectionRef = collection(db, APP_COLLECTION.movies);

    const docs = await getDocs(moviesCollectionRef).catch(e => {
        console.log(e);
        return undefined;
    })
    return docs?.docs?.map(item => item.data()) || [];
}
