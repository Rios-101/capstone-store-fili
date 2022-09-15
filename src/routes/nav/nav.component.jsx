import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utility";
import "./nav.style.scss"


const Nav = () => {

   const {currentUser,setCurrentUser} = useContext(UserContext)
   // console.log(currentUser);

   const signOutHandler =async ()=>{
      const res = await signOutUser();
      res === undefined ? setCurrentUser(null): console.log("Something is wrong");
   }

   return (
      <Fragment>
         <div className="navigation">
            <Link className="logo-container" to={"/"}>
               <Crown className="logo"/>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to={"/shop"}>
                  SHOP
               </Link>
               {
                  currentUser ? (
                     <span className="nav-link" onClick={signOutHandler}>Sign-Out</span>
                  ) :(
                     <Link to={"/signIn"} className="nav-link">
                        Sign-In
                     </Link>
                  )
               }
               
            </div>
         </div>
         <Outlet />
      </Fragment>
   );
};

export default Nav