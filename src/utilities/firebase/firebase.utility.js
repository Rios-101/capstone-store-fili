import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBha8YurCO4nli4gjANWao5uwxqIHYba1c",
  authDomain: "capstone-store-db.firebaseapp.com",
  projectId: "capstone-store-db",
  storageBucket: "capstone-store-db.appspot.com",
  messagingSenderId: "782718950689",
  appId: "1:782718950689:web:fcbf41493032e5833eb260",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters(
    {
        prompt:"select_account"
        
    }
)

export const auth = getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)

export const db = getFirestore()

export const creatDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,"dbUsers",userAuth.uid)
    console.log(userDocRef);
    const dbUsersData =await getDoc(userDocRef)
    console.log(dbUsersData);

    // if the data isnt in the database
    if(!dbUsersData.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {displayName,email,createdAt})
        }catch(error){
            console.log("error creating user", error.message);
        }
    }

    // if the data exist in the data base
    return userDocRef
}

 