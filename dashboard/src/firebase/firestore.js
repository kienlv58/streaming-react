import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { uploadBytesResumable, getDownloadURL, ref, getStorage } from 'firebase/storage';


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
const storage = getStorage(app);

const APP_COLLECTION = {
    movies : "movies",
}

export async function addMovies(data){
    const moviesCollectionRef = collection(db, APP_COLLECTION.movies);
    if(data.image){
        data.image = await uploadFile(data.image);
    }
    if(data.videoFile){
        data.videoFile = await uploadFile(data.videoFile);
    }
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

export async function uploadFile(file){
    return new Promise((resolve) => {
        if(!file) {
            resolve("")
        }else {
            const storageRef = ref(storage, `files/${file.name}`);

            const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
        
                        console.log(`upload ${percent}%`)
                    },
                    (err) => {
                        console.log(err)
                        resolve("")
                    },
                    () => {
                        // download url
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            resolve(url)
                        });
                    }
                );
        }
    })
    
}
