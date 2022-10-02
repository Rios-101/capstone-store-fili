import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({category}) => {
   return (
      <div className="directory-container">
         {category.map(({ title, id, imageUrl }) => (
            
            <CategoryItem title={title} key={id} imageUrl={imageUrl} />
            
         ))}
      </div>
   );
};

export default Directory;