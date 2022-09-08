import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./nav.style.scss"


const Nav = () => {
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
               <Link to={"/signIn"} className="nav-link">
                  Sign-In
               </Link>
            </div>
         </div>
         <Outlet />
      </Fragment>
   );
};

export default Nav