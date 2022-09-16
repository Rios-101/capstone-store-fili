import { useContext } from "react"
import {ReactComponent as Icon} from "../../assets/shopping-bag.svg"
import { IconContext } from "../../context/icon.context"
import "./cart-icon.style.scss"


const CartIcon = ()=>{

   const { isCartOpen, setIsCartOpen } = useContext(IconContext);

    const toggleHandler = ()=>{
      if (isCartOpen === false) {
         setIsCartOpen(true);
      }

      if (isCartOpen === true) {
         setIsCartOpen(false);
      }

      console.log(isCartOpen);
    }

   return (
      <div
         onClick={toggleHandler}
         className={`cart-icon-container`}
      >
         <Icon className="shopping-icon" />
         <span className="item-count">10</span>
      </div>
   );
}

export default CartIcon