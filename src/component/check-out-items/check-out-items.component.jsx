import { useContext } from "react";
// import { useState } from "react";
import { cartContext } from "../../context/cart.context";
import "./check-out-items.style.scss"


const CheckOutItems = ({product,cartItem})=>{

   const { addCartItem, removeCartItem, setCartItem } = useContext(cartContext);
   let {name,price,imageUrl,quantity} = product
      
   // const [qty,setQty] = useState(quantity)

   
      const remove = (e) => {
         // e.target.parentElement.remove()
          const filter = cartItem.filter((item) => item.id !== product.id);
          return setCartItem(filter); 
         
      };

      const reduce = (e)=> {
         if(quantity === 1){
            const filter = cartItem.filter(item=> item.id !== product.id)
            return setCartItem(filter)
            
         }

         removeCartItem(product)
         console.log(cartItem);
      }

      const add = ()=> {
         addCartItem(product);
      }

      
   return (
      <div className="checkout-item-container">
         <div className="image-container">
            <img src={imageUrl} alt={name} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <div className="arrow">
               <span onClick={reduce}>
                  <i class="fas fa-angle-left"></i>
               </span>
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow">
               <span onClick={add}>
                  <i class="fas fa-angle-right"></i>
               </span>
            </div>
         </span>
         <span className="price">{price}</span>
         <div className="remove-button" onClick={remove}>
            <i class="fas fa-times"></i>
         </div>
      </div>
   );

}

export default CheckOutItems