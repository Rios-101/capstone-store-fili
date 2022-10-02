import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../component/product-card/product-card.component";
import { CollectionContext } from "../../context/collection.context";
import "./collection-preview.style.scss";

const CollectionPreview = () => {
   const { collectionMap } = useContext(CollectionContext);

 
   return (
      <Fragment>
         {Object.keys(collectionMap).map((title) => (
            <Fragment key={title}>
               {/* {console.log(collectionMap[title].slice(0, 4))} */}
               <h2>
                  <Link to={`/shop/${title}`}>
                     <span>{title.toUpperCase()}</span>
                  </Link>
               </h2>
               <div className="product-container">
                  {collectionMap[title].slice(0, 4).map((product) => {
                     return <ProductCard key={product.id} product={product} />;
                  })}
               </div>
            </Fragment>
         ))}
      </Fragment>
   );
};

export default CollectionPreview;
