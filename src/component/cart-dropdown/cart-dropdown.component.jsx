import { useContext } from "react"
import { IconContext } from "../../context/icon.context"
import Button from "../button/button.component"
import "./cart-dropdown.style.scss"


const CartDropdown = ()=>{

   const { isCartOpen } = useContext(IconContext);



   return (
      <div
         className={`cart-dropdown-container ${
            isCartOpen ? null : "notDisplay"
         }`}
      >
         <div />
         <Button value={"GO TO CHECKOUT"} />
      </div>
   );
}

export default CartDropdown