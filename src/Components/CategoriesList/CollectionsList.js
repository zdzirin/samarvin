import { Link } from "react-router-dom";
import "simplebar";
import "simplebar/dist/simplebar.css";
import "./CategoriesList.css";

export default function CollectionsList(props) {
  return (
    <div className="categories-list ">
      {props.categories.map((e, i) => {
        return <Collection i={i} src={`/${e}Cover.jpg`} alt={e} title={e} />;
      })}
    </div>
  );
}

const Collection = (props) => {
  return (
    <Link to={`/collection/${props.title}`} className="category-container">
      <img
        src={process.env.PUBLIC_URL + props.src}
        alt={props.alt}
        width="100%"
      />
      <p className="category-title">{props.title}</p>
    </Link>
  );
};
