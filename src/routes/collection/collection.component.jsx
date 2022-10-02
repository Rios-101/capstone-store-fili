import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import ProductCard from "../../component/product-card/product-card.component";
import { CollectionContext } from "../../context/collection.context";
import "./collection.style.scss"




const Collection = ()=>{
   
   const { collection } = useParams();
   
   const {collectionMap} = useContext(CollectionContext)

   const [products,setProducts] = useState(collectionMap[collection])

   useEffect(()=>{
      setProducts(collectionMap[collection])
  
   }, [collection,collectionMap])

   return (
      <>
         <h2 className="collection-title">{collection.toUpperCase()}</h2>
         <div className="collection-container">
            {products &&
               products.map((product) => {
                  // console.log(product);
                  return <ProductCard key={product.id} product={product} />;
               })}
            {/* {console.log(products)} */}
         </div>
      </>
   );
}

export default Collection