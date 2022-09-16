import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../component/product-card/product-card.component";
import "./shop.style.scss"


const Shop = ()=>{

   const {products} = useContext(ProductContext);
   console.log(products);

   return (
      <div className="product-container">
         {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
         ))}
      </div>
   );
}

export default Shop