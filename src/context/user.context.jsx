import { createContext, useState,useEffect } from "react";
import { onAuthStateChangedListener,creatDocumentFromAuth } from "../utilities/firebase/firebase.utility";



export const UserContext = createContext({

   currentUser:null,
   setCurrentUser:()=> null
})

export const UserProvider = ({children})=>{

   const [currentUser,setCurrentUser] = useState(null);
   const value = {currentUser,setCurrentUser};

   
   useEffect(()=>{
   const response = onAuthStateChangedListener((user)=> {
      if(user){
         creatDocumentFromAuth(user); 
      }
      setCurrentUser(user)
      // console.log(user);
   } ) 
   return response
   },[])

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}