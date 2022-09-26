import { useContext } from "react"
import CheckOutItems from "../../component/check-out-items/check-out-items.component"
import { cartContext } from "../../context/cart.context"
import "./check-out.style.scss"



const CheckOut = ()=>{

   const {cartItem,total} = useContext(cartContext)



   return (
      <div className="checkout-container">
         <div className="checkout-header">
            <div className="header-block">
               <span>Product</span>
            </div>
            <div className="header-block">
               <span>Description</span>
            </div>
            <div className="header-block">
               <span>Quantity</span>
            </div>
            <div className="header-block">
               <span>Price</span>
            </div>
            <div className="header-block">
               <span>Remove</span>
            </div>
         </div>
         {cartItem.map((product) => {
            console.log(product);
            return (
               <CheckOutItems
                  key={product.id}
                  product={product}
                  cartItem={cartItem}
               />
            );
         })}
         <span className="total">Total: ${total}</span>
      </div>
   );
}

export default CheckOut