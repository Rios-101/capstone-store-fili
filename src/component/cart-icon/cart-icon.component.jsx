import { useContext } from "react"
import {ReactComponent as Icon} from "../../assets/shopping-bag.svg"
import { cartContext } from "../../context/cart.context"
import "./cart-icon.style.scss"


const CartIcon = ()=>{

   const { isCartOpen, setIsCartOpen,cartCount } = useContext(cartContext);

    const toggleHandler = ()=>{
      if (isCartOpen === false) {
         setIsCartOpen(true);
      }

      if (isCartOpen === true) {
         setIsCartOpen(false);
      }

      console.log(isCartOpen);
    }

   // const quantity = cartItem.map(e=> e.quantity)
    
   return (
      <div onClick={toggleHandler} className={`cart-icon-container`}>
         <Icon className="shopping-icon" />
         <span className="item-count">
            {/* {quantity.reduce((a, b) => a + b,0)} */}
            {cartCount}
         </span>
      </div>
   );
}

export default CartIcon