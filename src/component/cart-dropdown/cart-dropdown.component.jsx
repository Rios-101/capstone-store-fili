import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../context/cart.context"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import "./cart-dropdown.style.scss"



const CartDropdown = ()=>{

   const { isCartOpen,setIsCartOpen, cartItem } = useContext(cartContext);

   const toggle = ()=> setIsCartOpen(false)

   return (
      <div
         className={`cart-dropdown-container ${
            isCartOpen ? null : "notDisplay"
         }`}
      >
         <div className="cart-items">
            {cartItem.map((item) => {
               return <CartItem key={item.id} cartItem={item} />;
            })}
         </div>
         <Link to="/checkOut">
            <Button onClick={toggle} value={"GO TO CHECKOUT"} />
         </Link>
      </div>
   );
}

export default CartDropdown