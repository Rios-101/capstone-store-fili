import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
import Button from "../button/button.component"
import "./product-card.style.scss"



const ProductCard = ({product})=>{
   const { name, price, imageUrl} = product;

   const{addCartItem} = useContext(cartContext)

   const addProductHandler = ()=> addCartItem(product)

   return (
      <div className="product-card-container">
         <img src={imageUrl} alt={name} />
         <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
         </div>
         <Button value={"ADD TO CART"} onClick={addProductHandler}  buttonType={"inverted"} />
      </div>
   );
}

export default ProductCard