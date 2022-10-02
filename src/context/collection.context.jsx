import { createContext,useState,useEffect } from "react";
import { getCollectionAndDocument } from "../utilities/firebase/firebase.utility";
// import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocument } from "../utilities/firebase/firebase.utility.js";


export const  CollectionContext = createContext({
   collectionMap:{}
})

export const CollectionProvider = ({children})=>{

   const [collectionMap,setcollectionMap] = useState({})

   useEffect(()=>{
      const getCollectionMap = async ()=>{
         const collectionMap = await getCollectionAndDocument();
         // console.log(collectionMap);
         setcollectionMap(collectionMap)
      }

      getCollectionMap()
   },[])

   // useEffect(()=>{
   //    addCollectionAndDocument("collection",SHOP_DATA)
   // },[])

   const value = {collectionMap}

   return (
      <CollectionContext.Provider value={value}>
         {children}
      </CollectionContext.Provider>
   );
}