import { Route,Routes } from "react-router-dom";
import CollectionPreview from "../collection-preview/collection-preview.component";
import Collection from "../collection/collection.component";



const Shop = ()=>{
   return(
      <div>
         <Routes>
            <Route index element={<CollectionPreview/>}/>
            <Route path=":collection" element={<Collection/>}/>
         </Routes>
      </div>
   )
}


export default Shop