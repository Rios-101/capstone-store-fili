import "./category-item.styles.scss"
import { Link } from "react-router-dom";


const CategoryItem = ({imageUrl,title})=>{
   return (
      <div className="category-container">
         <div
            className="background-image"
            style={{ background: `url(${imageUrl})` }}
         />
         <div className="category-body-container">
            <Link to={`/shop/${title.toLowerCase()}`}>
                  <h2>{title}</h2>
                  <p>Shop Now</p>
            </Link>
         </div>
      </div>
   );
}

export default CategoryItem

