import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";
import "./PhotoList.css";

function PhotoList(props) {
  const photos = props.photos;
  const images = require.context("../../Photos", true);
  return (
    <div className="photo-list-container" data-simplebar>
      {photos.map((el, i) => {
        // console.log(el);
        return (
          <img
            className="thumbnail-photo"
            src={images(`./${el.src}`).default}
            alt={el.description}
            onClick={() => props.setOpenPhoto(i)}
          />
        );
      })}
    </div>
  );
}

export default PhotoList;
