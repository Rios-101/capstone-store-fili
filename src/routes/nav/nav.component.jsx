import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utility";
import "./nav.style.scss"


const Nav = () => {

   const {currentUser} = useContext(UserContext)
   // console.log(currentUser);

   const signOutHandler =async ()=>{
       await signOutUser();
   }

   return (
      <Fragment>
         <div className="navigation">
            <Link className="logo-container" to={"/"}>
               <Crown className="logo" />
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to={"/shop"}>
                  SHOP
               </Link>
               {currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>
                     Sign-Out
                  </span>
               ) : (
                  <Link to={"/signIn"} className="nav-link">
                     Sign-In
                  </Link>
               )}

               <CartIcon />
            </div>
            <CartDropdown />
         </div>
         <Outlet />
      </Fragment>
   );
};

export default Nav