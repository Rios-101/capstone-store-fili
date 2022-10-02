import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBha8YurCO4nli4gjANWao5uwxqIHYba1c",
  authDomain: "capstone-store-db.firebaseapp.com",
  projectId: "capstone-store-db",
  storageBucket: "capstone-store-db.appspot.com",
  messagingSenderId: "782718950689",
  appId: "1:782718950689:web:fcbf41493032e5833eb260",
};

// Initialize Firebase
// eslint-disable-next-line
 const app = initializeApp(firebaseConfig); 

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInWithUserEmailAndPassword = (email, password) =>{
  if(!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password)
}

export const db = getFirestore();

export const creatDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "dbUsers", userAuth.uid);
  const dbUsersData = await getDoc(userDocRef);

  // if the data isnt in the database
  if (!dbUsersData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  // if the data exist in the data base
  return userDocRef;
};

export const createAuthuUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signOutUser =async ()=>{
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth,callback)

// export database to firebase
export const addCollectionAndDocument = async (collectionName, objectsToAdd)=>{
  const findCollection = collection(db,collectionName) //Note the findcollection will automatically create a new collection if the collection u are looking for is not in the db. i.e => if u are looking for gamescollection in the datbase and in your database there is no game collection it will automatically create a new game collection for u in the database. so the findCollection also dobble down has the createCollection

  // for use to upload to the data base we will first need to create a batch. this will make use be able to creat,read,upload and delete in the dat base
  const batch = writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef = doc(findCollection,object.title.toLowerCase())
    batch.set(docRef,object)
  })

  await batch.commit()
  console.log("done");
}

// get data from database in firebase
export const getCollectionAndDocument = async () => {
  const findCollection = collection(db,"collection")
  const q = query(findCollection)

  const querySnopshot = await getDocs(q)
  const collectionMap = querySnopshot.docs.reduce((acc,docSnapshot)=>{
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc
  },{})

  return collectionMap
};